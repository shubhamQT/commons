import { test, expect } from '@support/fixtures';
import env from '@support/env';
import testData from '@testdata/test-data.json';


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
    await ukgcommonsPage.clickSaveIcon();
  });

  await test.step('Assert contains — Bookmark toggle indicates Saved', async () => {
    await ukgcommonsPage.expectSaveIconContainsText('Saved');
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


test('Unsaving from article card removes it from My saved news', { tag: ["@e2e","@regression","@P1","@unsave-from-card-removes-from-saved"] }, async ({ page, ukgcommonsPage, savedNewsPage }) => {
  await test.step("Before — Article 'Take the next step in your development at UKG' is already saved for the logged-in user", async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Open — Open Commons QA homepage', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Scroll — Scroll to target article card', async () => {
    await ukgcommonsPage.scrollTakeTheNextStepInYourDevIntoView();
  });

  await test.step('Assert contains — Bookmark toggle shows Saved before unsaving', async () => {
    await ukgcommonsPage.expectTakeTheNextStepInYourDevContainsText('Saved');
  });

  await test.step('Click — Tap bookmark toggle to unsave on card', async () => {
    await ukgcommonsPage.clickAiUnsaveNews();
  });

  await test.step('Assert contains — Bookmark toggle now shows Save', async () => {
    await ukgcommonsPage.expectTakeTheNextStepInYourDevContainsText('Save');
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

  await test.step('Assert hidden — Unsaved item is removed from Saved list', async () => {
    await savedNewsPage.expectTakeTheNextStepInYourDevHidden();
  });
});
