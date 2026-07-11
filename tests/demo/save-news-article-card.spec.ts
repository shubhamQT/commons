import { test, expect } from '@support/fixtures';
import env from '@support/env';
import testData from '@testdata/test-data.json';

test('Save a Featured article and verify Saved indicator and presence in My saved news', { tag: ["@functional","@regression","@P0","@save-featured-article-and-verify-in-saved","@req-72e65a65-bcce-4f10-ba6b-fedeebd56b66"] }, async ({ page, ukgcommonsPage, savedNewsPage }) => {
  await test.step('Navigate to URL — Open Commons QA homepage', async () => {
    await page.goto('https://commons-qa.util.ukg.com/');
  });
  await test.step('Wait until visible — Featured section — ([data-testid=\'featured-news-section\'])', async () => {
    await ukgcommonsPage.expectFeaturedVisible();
  });
  await test.step('Click — save news — ([data-testid=\'featured-news-section\'] [data-testid=\'featured-card\']:has-text(\'QA Fixture: Save Me\')', async () => {
    await ukgcommonsPage.clickSaveNews();
  });
  await test.step('Assert visible — unsave news — ([data-testid=\'featured-news-section\'] [data-testid=\'featured-card\']:has-text(\'QA Fixture', async () => {
    await ukgcommonsPage.expectUnsaveNewsVisible();
  });
  await test.step('Click — profile — ([data-testid=\'profile-menu-button\'])', async () => {
    await ukgcommonsPage.clickTest('[data-tour="user-profile"]');
  });
  await test.step('Click — My saved news — ([data-testid=\'menu-saved-news\'])', async () => {
    await ukgcommonsPage.clickMySavedNews();
  });
  await test.step('Wait until visible — my Saved News — ([data-testid=\'saved-news-page\'])', async () => {
    await savedNewsPage.expectMySavedNewsVisible();
  });
  await test.step('Assert visible — unsave news — ([data-testid=\'saved-news-page\'])', async () => {
    await savedNewsPage.expectBtnCardNewsUnsaveVisible();
  });
});
