import type { Page } from "@playwright/test";
import {
  checkWhenVisible,
  clearWhenVisible,
  clickOpensNewPage,
  clickWhenVisible,
  closePage,
  doubleClickWhenVisible,
  expectChecked,
  expectContainsText,
  expectCount,
  expectCountGreaterThan,
  expectDisabled,
  expectEnabled,
  expectFocused,
  expectHidden,
  expectPageTitle,
  expectSelected,
  expectText,
  expectUnchecked,
  expectValue,
  expectVisible,
  fill,
  fillWhenVisible,
  getTextWhenVisible,
  goBack,
  hoverWhenVisible,
  longPressWhenVisible,
  navigateTo,
  scrollIntoView,
  scrollIntoViewWhenVisible,
  selectOptionWhenVisible,
  takeScreenshot,
  typeTextWhenVisible,
  uncheckWhenVisible,
  waitForHidden,
  waitForNewPage,
  waitForVisible,
  waitMs,
  webLocator,
} from "../support/web-actions";

export class TakeTheNextStepInYourDevelopmentAtUkgPage {
  private static readonly L = {
    learningAndDevelopmentHome: { strategy: 'role' as const, value: 'Learning and Development home', role: 'link', actionKind: 'link' as const },
    learningAndDevelopmentLink: { strategy: 'role' as const, value: 'Learning and Development', role: 'link', actionKind: 'link' as const },
    home: { strategy: 'role' as const, value: 'Home', role: 'link', scope: '[role="listitem"]', scopeText: 'Home', scopeIndex: 0, actionKind: 'link' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickLearningAndDevelopmentHome(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentHome));
  }

  async clickLearningAndDevelopmentHomeOpensNewPage(): Promise<Page> {
    return clickOpensNewPage(this.page, webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentHome));
  }

  async expectLearningAndDevelopmentHomeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentHome), timeoutMs, soft);
  }

  async expectLearningAndDevelopmentHomeHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentHome), timeoutMs, soft);
  }

  async expectLearningAndDevelopmentHomeText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentHome), expected, timeoutMs, soft);
  }

  async expectLearningAndDevelopmentHomeContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentHome), substring, timeoutMs, soft);
  }

  async scrollLearningAndDevelopmentHomeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentHome));
  }

  async clickLearningAndDevelopmentLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentLink));
  }

  async clickLearningAndDevelopmentLinkOpensNewPage(): Promise<Page> {
    return clickOpensNewPage(this.page, webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentLink));
  }

  async expectLearningAndDevelopmentLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentLink), timeoutMs, soft);
  }

  async expectLearningAndDevelopmentLinkHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentLink), timeoutMs, soft);
  }

  async expectLearningAndDevelopmentLinkText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentLink), expected, timeoutMs, soft);
  }

  async expectLearningAndDevelopmentLinkContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentLink), substring, timeoutMs, soft);
  }

  async scrollLearningAndDevelopmentLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentLink));
  }

  async clickHome(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.home));
  }

  async clickHomeOpensNewPage(): Promise<Page> {
    return clickOpensNewPage(this.page, webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.home));
  }

  async expectHomeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.home), timeoutMs, soft);
  }

  async expectHomeHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.home), timeoutMs, soft);
  }

  async expectHomeText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.home), expected, timeoutMs, soft);
  }

  async expectHomeContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.home), substring, timeoutMs, soft);
  }

  async scrollHomeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.home));
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  /** Assert page title matches an expected string or regex. */
  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expectPageTitle(this.page, expected, timeoutMs);
  }

  /** Verify we are on the correct page using the title captured at record time. */
  async verifyOnPage(timeoutMs = 30_000): Promise<void> {
    await expectPageTitle(this.page, 'Take the next step in your development at UKG', timeoutMs);
  }


  async doubleClickLearningAndDevelopmentHome(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentHome));
  }

  async longPressLearningAndDevelopmentHome(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentHome));
  }

  async expectLearningAndDevelopmentHomeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentHome), value, timeoutMs);
  }

  async expectLearningAndDevelopmentHomeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentHome), timeoutMs);
  }

  async expectLearningAndDevelopmentHomeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentHome), timeoutMs);
  }

  async expectLearningAndDevelopmentHomeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentHome), timeoutMs);
  }

  async expectLearningAndDevelopmentHomeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentHome), timeoutMs);
  }

  async expectLearningAndDevelopmentHomeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentHome), timeoutMs);
  }

  async expectLearningAndDevelopmentHomeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentHome), count, timeoutMs);
  }

  async doubleClickLearningAndDevelopmentLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentLink));
  }

  async longPressLearningAndDevelopmentLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentLink));
  }

  async expectLearningAndDevelopmentLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentLink), value, timeoutMs);
  }

  async expectLearningAndDevelopmentLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentLink), timeoutMs);
  }

  async expectLearningAndDevelopmentLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentLink), timeoutMs);
  }

  async expectLearningAndDevelopmentLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentLink), timeoutMs);
  }

  async expectLearningAndDevelopmentLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentLink), timeoutMs);
  }

  async expectLearningAndDevelopmentLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentLink), timeoutMs);
  }

  async expectLearningAndDevelopmentLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.learningAndDevelopmentLink), count, timeoutMs);
  }

  async doubleClickHome(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.home));
  }

  async longPressHome(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.home));
  }

  async expectHomeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.home), value, timeoutMs);
  }

  async expectHomeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.home), timeoutMs);
  }

  async expectHomeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.home), timeoutMs);
  }

  async expectHomeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.home), timeoutMs);
  }

  async expectHomeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.home), timeoutMs);
  }

  async expectHomeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.home), timeoutMs);
  }

  async expectHomeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, TakeTheNextStepInYourDevelopmentAtUkgPage.L.home), count, timeoutMs);
  }

}
