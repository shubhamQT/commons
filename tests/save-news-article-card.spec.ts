import { test, expect } from '@support/fixtures';
import env from '@support/env';

test('Save from Featured, verify synced state, persistence, open from Saved, then unsave removes immediately', { tag: ["@e2e","@regression","@P0","@save-from-featured-persist-sync-open-and-unsave"] }, async ({ page, ukgcommonsPage, savedNewsPage, takeTheNextStepInYourDevelopmentAtUkgPage }) => {
  await test.step('Open — Navigate to Commons QA home', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Assert visible — Featured News section visible', async () => {
    await ukgcommonsPage.expectFeaturedVisible();
  });

  await test.step('Scroll — Featured card with title \"Take the next step in your development at UKG\"', async () => {
    await ukgcommonsPage.scrollTakeTheNextStepIntoView();
  });

  await test.step('Assert visible — Bookmark toggle shown and currently unsaved on Featured card', async () => {
    await ukgcommonsPage.expectSaveNewsVisible();
  });

  await test.step('Click — Save the article from Featured by tapping bookmark toggle', async () => {
    await ukgcommonsPage.clickSaveNews();
  });

  await test.step('Assert visible — Bookmark toggle now indicates saved (filled)', async () => {
    await ukgcommonsPage.expectUnsaveNewsVisible();
  });

  await test.step('Scroll — Latest News section', async () => {
    await ukgcommonsPage.scrollLatestNewsTitleIntoView();
  });

  await test.step('Assert visible — Latest News ready', async () => {
    await ukgcommonsPage.expectLatestNewsTitleVisible();
  });

  await test.step('Assert visible — Same article in Latest shows saved state', async () => {
    await ukgcommonsPage.expectUnsaveNewsVisible();
  });

  await test.step('Open — Reload home to verify persistence', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Assert visible — Featured section visible after reload', async () => {
    await ukgcommonsPage.expectFeaturedVisible();
  });

  await test.step('Assert visible — Featured card still shows saved state after reload', async () => {
    await ukgcommonsPage.expectUnsaveNewsVisible();
  });

  await test.step('Click — Open profile menu', async () => {
    await ukgcommonsPage.clickUserProfile();
  });

  await test.step('Click — Open \"My saved news\" from profile menu', async () => {
    await ukgcommonsPage.clickMySavedNews();
  });

  await test.step('Assert visible — Saved news list visible', async () => {
    await savedNewsPage.expectMySavedNewsVisible();
  });

  await test.step('Assert visible — Saved list contains the article', async () => {
    await savedNewsPage.expectTakeTheNextStepVisible();
  });

  await test.step('Click — Open the saved item to view full article', async () => {
    await savedNewsPage.clickTakeTheNextStep();
  });

  await test.step('Assert visible — Article title displayed on detail page', async () => {
    await takeTheNextStepInYourDevelopmentAtUkgPage.expectHomeVisible();
  });

  await test.step('Assert text — Article title matches saved item', async () => {
    await takeTheNextStepInYourDevelopmentAtUkgPage.expectPageTitle('Take the next step in your development at UKG');
  });

  await test.step('Navigate back — Return to Saved News list', async () => {
    await page.goBack();
  });

  await test.step('Click — Unsave the item from Saved News list', async () => {
    await savedNewsPage.clickUnsaveNews();
  });

  await test.step('Assert hidden — Saved item disappears immediately from the list', async () => {
    await savedNewsPage.expectTakeTheNextStepHidden();
  });

  await test.step('Open — Back to home to confirm unsaved state', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Assert visible — Featured card shows unsaved state after removal', async () => {
    await ukgcommonsPage.expectSaveNewsVisible();
  });
});
