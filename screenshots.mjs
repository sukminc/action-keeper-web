import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';

const sleep = promisify(setTimeout);
const PORT = 8888;
const URL = `http://localhost:${PORT}`;
const SCREENSHOTS_DIR = 'screenshots';

const scenes = [
    { name: '01-hero', selector: '.hero' },
    { name: '02-features', selector: '#features' },
    { name: '03-how-it-works', selector: '#how-it-works' }
];

async function takeScreenshots() {
    let server;
    let browser;
    try {
        console.log('Starting web server...');
        server = spawn('python3', ['-m', 'http.server', PORT.toString(), '--bind', '0.0.0.0']);
        
        server.stderr.on('data', (data) => {
            console.error(`Server stderr: ${data}`);
        });

        // Wait for the server to be ready
        await sleep(2000); 
        console.log('Server started.');

        console.log('Launching Puppeteer...');
        browser = await puppeteer.launch({ headless: "new" });
        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 800 });

        if (!fs.existsSync(SCREENSHOTS_DIR)){
            fs.mkdirSync(SCREENSHOTS_DIR);
        }

        console.log(`Navigating to ${URL}...`);
        await page.goto(URL, { waitUntil: 'networkidle2' });

        for (const scene of scenes) {
            console.log(`Capturing screenshot: ${scene.name}`);
            const element = await page.$(scene.selector);
            if (element) {
                await element.screenshot({ path: `${SCREENSHOTS_DIR}/${scene.name}.png` });
                console.log(`Saved screenshot: ${SCREENSHOTS_DIR}/${scene.name}.png`);
            } else {
                console.log(`Element with selector "${scene.selector}" not found.`);
            }
        }

    } catch (error) {
        console.error('An error occurred during screenshot generation:', error);
    } finally {
        if (browser) {
            console.log('Closing browser...');
            await browser.close();
        }
        if (server) {
            console.log('Stopping web server...');
            server.kill();
        }
        console.log('Screenshot process finished.');
    }
}

takeScreenshots();
