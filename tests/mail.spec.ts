import {test , expect} from '@playwright/test';

test.only('mail' , async({page})=>{
	await page.goto("https://www.google.com/intl/bn/gmail/about/");
	const signinButton = await page.locator(".button--mobile-before-hero-only");
	signinButton.click();

	const inputEmail = await page.locator("#identifierId");

	// clicking sign in
	const nextButton = await page.locator(".VfPpkd-vQzf8d >> nth=1");
	
	// putting email
	await inputEmail.type("sh249774@gmail.com");
	await nextButton.click();

	const inputPass = await page.locator('[type="password"]');
	const nextButton2 = await page.locator(".VfPpkd-RLmnJb >> nth=1");

	//putting password
	await inputPass.fill("thisisapassword2002");
	await nextButton2.click();

	const makeBtn = await page.locator('[jscontroller="eIu7Db"]');

	await makeBtn.click();

	const to = await page.locator('[aria-label="প্রাপক"]');
	const sub = await page.locator('[aria-label="Subject"]');
	const desc = await page.locator("xpath=//div[@aria-label='মেসেজের বিষয়বস্তু']");
	

	// writing email
	await to.type("hasan.2002.siam@gmail.com,tipu6588@gmail.com");
	await sub.type("Welcome Message");
	await desc.fill("Welcome mail for you Siam 2022");
	const submitBtn = await page.locator('[aria-label="পাঠান ‪(Ctrl-Enter)‬"]');
	await submitBtn.click();
	await page.waitForTimeout(10000);

});