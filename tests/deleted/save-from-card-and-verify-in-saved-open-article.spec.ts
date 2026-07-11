// Archived from tests/demo/save-news-article-card.spec.ts (test case save-from-card-and-verify-in-saved-open-article)
import { test, expect } from '@support/fixtures';

test('Save an article from card, verify in My saved news, and open full article', { tag: ["@e2e","@regression","@P0","@save-from-card-and-verify-in-saved-open-article"] }, async ({ page, ukgcommonsPage, savedNewsPage, takeTheNextStepInYourDevelopmentAtUkgPage }) => {
  await test.step('Open — Open Commons QA homepage', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Scroll — Scroll to target article card', async () => {
    await ukgcommonsPage.scrollTakeTheNextStepInYourDevIntoView();
  });

  await test.step('Assert visible — Target article card is visible', async () => {
    await ukgcommonsPage.expectTakeTheNextStepInYourDevVisible();
  });

  await test.step('Click — Tap bookmark icon to save', async () => {
    await ukgcommonsPage.scrollSaveIconIntoView();
    await ukgcommonsPage.expectSaveIconVisible();
    await ukgcommonsPage.clickSaveIcon();
  });

  await test.step('Assert contains — Bookmark toggle indicates Saved', async () => {
    await ukgcommonsPage.expectSaveIconContainsText('Saved');
    await ukgcommonsPage.expectNewsSavedSuccessfullyVisible();
  });

  await test.step('Click — Open profile menu', async () => {
    await ukgcommonsPage.clickUserProfile();
  });

  await test.step('Click — Go to My saved news', async () => {
    await ukgcommonsPage.clickMySavedNews();
  });

  await test.step('Assert visible — My saved news page header', async () => {
    await savedNewsPage.expectMySavedNewsVisible();
  });

  await test.step('Assert visible — Saved item appears in list', async () => {
    await savedNewsPage.expectTakeTheNextStepInYourDevVisible();
  });

  await test.step('Click — Open saved item to full article', async () => {
    await savedNewsPage.clickTakeTheNextStepInYourDev();
  });

  await test.step('Assert visible — Article page title loads', async () => {
    await takeTheNextStepInYourDevelopmentAtUkgPage.expectLearningAndDevelopmentVisible();
  });

  await test.step('Assert contains — Article page heading matches saved item', async () => {
    await takeTheNextStepInYourDevelopmentAtUkgPage.expectPageTitle(testData.savedArticleIsRemovedFromMySavedNewsWhenArchivedServerSide.searchForTheTargetArticleByTitle);
  });
});
