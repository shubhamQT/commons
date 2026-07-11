import { test, expect } from '@support/fixtures';
import env from '@support/env';

test("Access 'My saved news' from profile and see saved article listed", { tag: ["@functional","@regression","@P0","@view-saved-news-via-profile-and-see-item"] }, async ({ page, ukgcommonsPage, savedNewsPage }) => {
  await test.step('Open — Open Commons QA homepage', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Assert visible — Wait for news feed', async () => {
    await ukgcommonsPage.expectSearchNewsSitesOrVisible();
  });

  await test.step('Scroll — Scroll to the target article card', async () => {
    await ukgcommonsPage.scrollTakeTheNextStepInYourDevIntoView();
  });

  await test.step('Click — Save the article', async () => {
    await ukgcommonsPage.clickTakeTheNextStepInYourDevSaveNews();
  });

  await test.step('Assert visible — Verify saved (filled) icon on the card', async () => {
    await ukgcommonsPage.expectTakeTheNextStepInYourDevUnsaveNewsVisible();
  });

  await test.step('Click — Open profile menu', async () => {
    await ukgcommonsPage.clickUserProfile();
  });

  await test.step("Click — Select 'My saved news' from profile menu", async () => {
    await ukgcommonsPage.clickMySavedNews();
  });

  await test.step('Assert visible — Wait for Saved News list', async () => {
    await savedNewsPage.expectMySavedNewsVisible();
  });

  await test.step("Assert visible — Verify saved article appears in 'My saved news'", async () => {
    await savedNewsPage.expectTakeTheNextStepInYourDevLearningAndDevelopmentVisible();
  });

  await test.step('Click — Cleanup: Unsave from Saved News list item', async () => {
    await savedNewsPage.clickTakeTheNextStepInYourDevUnsaveNews();
  });

  await test.step('Assert hidden — Verify the item is removed from Saved News list', async () => {
    await savedNewsPage.expectTakeTheNextStepInYourDevLearningAndDevelopmentHidden();
  });
});
