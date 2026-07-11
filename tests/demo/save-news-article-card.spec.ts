import { test, expect } from '@support/fixtures';
import env from '@support/env';
import testData from '@testdata/test-data.json';

test("Save article from Featured, verify Saved state, find in 'My saved news', and open full article", { tag: ["@e2e","@regression","@P0","@save-from-featured-open-via-saved"] }, async ({ page, ukgcommonsPage, savedNewsPage, takeTheNextStepInYourDevelopmentAtUkgPage }) => {
  await test.step('Open — Open Commons QA Home', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Assert visible — Featured section visible', async () => {
    await ukgcommonsPage.expectFeaturedNewsTitleVisible();
  });

  await test.step('Assert visible — Target article card in Featured is visible', async () => {
    await ukgcommonsPage.expectTakeTheNextStepInYourDevVisible();
  });

  await test.step('Click — Tap bookmark icon on the target article card (Featured)', async () => {
    await ukgcommonsPage.clickSaveIcon();
  });

  await test.step('Assert visible — Saved state indicator on the card is visible', async () => {
    await ukgcommonsPage.expectNewsSavedSuccessfullyVisible();
  });

  await test.step('Click — Open profile/avatar menu', async () => {
    await ukgcommonsPage.clickUserProfile();
  });

  await test.step("Click — Open 'My saved news' from profile menu", async () => {
    await ukgcommonsPage.clickMySavedNews();
  });

  await test.step("Assert visible — 'My saved news' page heading visible", async () => {
    await savedNewsPage.expectMySavedNewsVisible();
  });

  await test.step('Assert visible — Saved item with target title appears in list', async () => {
    await savedNewsPage.expectTakeTheNextStepLinkVisible();
  });

  await test.step('Click — Open the saved item', async () => {
    await savedNewsPage.clickTakeTheNextStepLink();
  });

  await test.step('Assert visible — Article detail page title visible', async () => {
    await takeTheNextStepInYourDevelopmentAtUkgPage.expectPageTitle();
  });

  await test.step('Assert text — Article title matches', async () => {
    await takeTheNextStepInYourDevelopmentAtUkgPage.expectPageTitle(testData.savedArticleIsRemovedFromMySavedNewsWhenArchivedServerSide.searchForTheTargetArticleByTitle);
  });

  await test.step("Navigate back — Navigate back to 'My saved news' list", async () => {
    await page.goBack();
  });

  await test.step('Click — Unsave the article from Saved News list (cleanup)', async () => {
    await savedNewsPage.clickTakeTheNextStepInYourDevUnsaveNews();
  });

  await test.step('Assert hidden — Saved item disappears from list after unsave', async () => {
    await savedNewsPage.expectTakeTheNextStepInYourDevLearningAndDevelopmentHidden();
  });
});
