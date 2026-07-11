import { test, expect } from '@support/fixtures';
import env from '@support/env';
import testData from '@testdata/test-data.json';


test('Save a Featured article and verify Saved indicator and presence in My saved news', { tag: ["@functional","@regression","@P0","@save-featured-article-and-verify-in-saved"] }, async ({ page, ukgcommonsPage, savedNewsPage }) => {
  await test.step('Open — Open Commons QA homepage (SSO via auth file)', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Assert visible — Featured section', async () => {
    await ukgcommonsPage.expectFeaturedNewsTitleVisible();
  });

  await test.step('Click — save news', async () => {
    await ukgcommonsPage.clickTakeTheNextStepInYourDevSaveNews();
  });

  await test.step('Assert visible — unsave news', async () => {
    await ukgcommonsPage.expectTakeTheNextStepInYourDevUnsaveNewsVisible();
  });

  await test.step('Click — profile', async () => {
    await ukgcommonsPage.clickUserProfile();
  });

  await test.step('Click — My saved news', async () => {
    await ukgcommonsPage.clickMySavedNews();
  });

  await test.step('Assert visible — my Saved News', async () => {
    await savedNewsPage.expectMySavedNewsVisible();
  });

  await test.step('Assert visible — unsave news', async () => {
    await savedNewsPage.expectTakeTheNextStepInYourDevUnsaveNewsVisible();
  });
});
