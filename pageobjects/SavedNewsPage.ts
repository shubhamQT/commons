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

export class SavedNewsPage {
  private static readonly L = {
    showCollapsedMenu: { strategy: 'role' as const, value: 'show collapsed menu', role: 'button', actionKind: 'button' as const },
    jm: { strategy: 'text' as const, value: 'JM', actionKind: 'text' as const },
    mySavedNews: { strategy: 'role' as const, value: 'My saved news', role: 'button', actionKind: 'button' as const },
    learningAndDevelopment: { strategy: 'role' as const, value: 'Learning and Development', role: 'link', actionKind: 'link' as const },
    unsaveNews: { strategy: 'role' as const, value: 'Unsave news', role: 'button', actionKind: 'button' as const },
    takeTheNextStepLink: { strategy: 'role' as const, value: 'Take the next step in your development at UKG', role: 'link', actionKind: 'link' as const },
    comment: { strategy: 'altText' as const, value: 'comment', actionKind: 'generic' as const },
    shareNews: { strategy: 'role' as const, value: 'Share news', role: 'button', actionKind: 'button' as const },
    switchToPreviousNews: { strategy: 'role' as const, value: 'switch to previous news', role: 'button', actionKind: 'button' as const },
    ai: { strategy: 'text' as const, value: 'AI', actionKind: 'text' as const },
    drakeTiwary: { strategy: 'text' as const, value: 'Drake Tiwary', actionKind: 'text' as const },
    saveNews: { strategy: 'role' as const, value: 'Save news', role: 'button', actionKind: 'button' as const },
    stacyCutrono: { strategy: 'text' as const, value: 'Stacy Cutrono', actionKind: 'text' as const },
    allEmployeeTownHall: { strategy: 'altText' as const, value: 'All-Employee Town Hall - June 2026', actionKind: 'generic' as const },
    ashleyAmerson: { strategy: 'text' as const, value: 'Ashley Amerson', actionKind: 'text' as const },
    celebratingTheStrengthOf: { strategy: 'altText' as const, value: 'Celebrating the strength of the UKG Ready partner network', actionKind: 'generic' as const },
    celebratingTheStrengthOf2: { strategy: 'text' as const, value: 'Celebrating the strength of the UKG Ready partner', actionKind: 'text' as const },
    christopherKiklas: { strategy: 'text' as const, value: 'Christopher Kiklas', actionKind: 'text' as const },
    latestNews: { strategy: 'role' as const, value: 'Latest news', role: 'heading', level: 3, actionKind: 'text' as const },
    gtmMarketing: { strategy: 'role' as const, value: 'GTM: Marketing', role: 'link', actionKind: 'link' as const },
    tuneInTodayUkgAdLink: { strategy: 'role' as const, value: 'Tune-In Today: UKG Ad Spot During the World Cup', role: 'link', actionKind: 'link' as const },
    englishUnitedStates: { strategy: 'css' as const, value: '#language-switcher-button', actionKind: 'button' as const },
    chat: { strategy: 'testId' as const, value: 'chat-link', frame: 'iframe#mw4web_iframe', actionKind: 'button' as const },
    noNews: { strategy: 'altText' as const, value: 'no-news', actionKind: 'generic' as const },
    noSavedNews: { strategy: 'text' as const, value: 'No saved news', actionKind: 'text' as const },
    takeTheNextStep: { strategy: 'altText' as const, value: 'Take the next step in your development at UKG', actionKind: 'generic' as const },
    takeTheNextStep2: { strategy: 'text' as const, value: 'Take the next step in your development at UKG', actionKind: 'text' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickShowCollapsedMenu(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu));
  }

  async doubleClickShowCollapsedMenu(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu));
  }

  async expectShowCollapsedMenuVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu), timeoutMs, soft);
  }

  async getInnerTextJm(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.jm));
  }

  async expectJmVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.jm), timeoutMs, soft);
  }

  async clickMySavedNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.mySavedNews));
  }

  async doubleClickMySavedNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.mySavedNews));
  }

  async expectMySavedNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs, soft);
  }

  async clickLearningAndDevelopment(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.learningAndDevelopment));
  }

  async expectLearningAndDevelopmentVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.learningAndDevelopment), timeoutMs, soft);
  }

  async clickUnsaveNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.unsaveNews));
  }

  async doubleClickUnsaveNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.unsaveNews));
  }

  async expectUnsaveNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.unsaveNews), timeoutMs, soft);
  }

  async clickTakeTheNextStepLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink));
  }

  async expectTakeTheNextStepLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), timeoutMs, soft);
  }

  async clickComment(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.comment));
  }

  async expectCommentVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.comment), timeoutMs, soft);
  }

  async clickShareNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.shareNews));
  }

  async doubleClickShareNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.shareNews));
  }

  async expectShareNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.shareNews), timeoutMs, soft);
  }

  async clickSwitchToPreviousNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews));
  }

  async doubleClickSwitchToPreviousNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews));
  }

  async expectSwitchToPreviousNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), timeoutMs, soft);
  }

  async getInnerTextAi(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.ai));
  }

  async expectAiVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.ai), timeoutMs, soft);
  }

  async getInnerTextDrakeTiwary(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.drakeTiwary));
  }

  async expectDrakeTiwaryVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.drakeTiwary), timeoutMs, soft);
  }

  async clickSaveNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.saveNews));
  }

  async doubleClickSaveNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.saveNews));
  }

  async expectSaveNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.saveNews), timeoutMs, soft);
  }

  async getInnerTextStacyCutrono(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.stacyCutrono));
  }

  async expectStacyCutronoVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.stacyCutrono), timeoutMs, soft);
  }

  async clickAllEmployeeTownHall(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall));
  }

  async expectAllEmployeeTownHallVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall), timeoutMs, soft);
  }

  async getInnerTextAshleyAmerson(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.ashleyAmerson));
  }

  async expectAshleyAmersonVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.ashleyAmerson), timeoutMs, soft);
  }

  async clickCelebratingTheStrengthOf(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf));
  }

  async expectCelebratingTheStrengthOfVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf), timeoutMs, soft);
  }

  async getInnerTextCelebratingTheStrengthOf2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2));
  }

  async expectCelebratingTheStrengthOf2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2), timeoutMs, soft);
  }

  async getInnerTextChristopherKiklas(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.christopherKiklas));
  }

  async expectChristopherKiklasVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.christopherKiklas), timeoutMs, soft);
  }

  async getInnerTextLatestNews(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.latestNews));
  }

  async expectLatestNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs, soft);
  }

  async clickGtmMarketing(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.gtmMarketing));
  }

  async expectGtmMarketingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.gtmMarketing), timeoutMs, soft);
  }

  async clickTuneInTodayUkgAdLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAdLink));
  }

  async expectTuneInTodayUkgAdLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAdLink), timeoutMs, soft);
  }

  async clickEnglishUnitedStates(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.englishUnitedStates));
  }

  async doubleClickEnglishUnitedStates(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.englishUnitedStates));
  }

  async expectEnglishUnitedStatesVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.englishUnitedStates), timeoutMs, soft);
  }

  async clickChat(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.chat));
  }

  async doubleClickChat(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.chat));
  }

  async expectChatVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.chat), timeoutMs, soft);
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
    await expectPageTitle(this.page, 'UKG Commons', timeoutMs);
  }

  async clickNoNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.noNews));
  }

  async expectNoNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.noNews), timeoutMs, soft);
  }

  async getInnerTextNoSavedNews(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.noSavedNews));
  }

  async expectNoSavedNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.noSavedNews), timeoutMs, soft);
  }

  async clickTakeTheNextStep(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep));
  }

  async expectTakeTheNextStepVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep), timeoutMs, soft);
  }

  async getInnerTextTakeTheNextStep2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2));
  }

  async expectTakeTheNextStep2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2), timeoutMs, soft);
  }


  async longPressShowCollapsedMenu(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu));
  }

  async expectShowCollapsedMenuHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu), timeoutMs);
  }

  async expectShowCollapsedMenuText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu), expected, timeoutMs);
  }

  async expectShowCollapsedMenuContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu), substring, timeoutMs);
  }

  async expectShowCollapsedMenuValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu), value, timeoutMs);
  }

  async expectShowCollapsedMenuEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu), timeoutMs);
  }

  async expectShowCollapsedMenuDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu), timeoutMs);
  }

  async expectShowCollapsedMenuChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu), timeoutMs);
  }

  async expectShowCollapsedMenuUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu), timeoutMs);
  }

  async expectShowCollapsedMenuFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu), timeoutMs);
  }

  async expectShowCollapsedMenuCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu), count, timeoutMs);
  }

  async scrollShowCollapsedMenuIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.showCollapsedMenu));
  }

  async clickJm(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.jm));
  }

  async doubleClickJm(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.jm));
  }

  async longPressJm(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.jm));
  }

  async expectJmHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.jm), timeoutMs);
  }

  async expectJmText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.jm), expected, timeoutMs);
  }

  async expectJmContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.jm), substring, timeoutMs);
  }

  async expectJmValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.jm), value, timeoutMs);
  }

  async expectJmEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.jm), timeoutMs);
  }

  async expectJmDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.jm), timeoutMs);
  }

  async expectJmChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.jm), timeoutMs);
  }

  async expectJmUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.jm), timeoutMs);
  }

  async expectJmFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.jm), timeoutMs);
  }

  async expectJmCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.jm), count, timeoutMs);
  }

  async scrollJmIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.jm));
  }

  async longPressMySavedNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.mySavedNews));
  }

  async expectMySavedNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.mySavedNews), expected, timeoutMs);
  }

  async expectMySavedNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.mySavedNews), substring, timeoutMs);
  }

  async expectMySavedNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.mySavedNews), value, timeoutMs);
  }

  async expectMySavedNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.mySavedNews), count, timeoutMs);
  }

  async scrollMySavedNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.mySavedNews));
  }

  async doubleClickLearningAndDevelopment(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.learningAndDevelopment));
  }

  async longPressLearningAndDevelopment(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.learningAndDevelopment));
  }

  async expectLearningAndDevelopmentHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.learningAndDevelopment), timeoutMs);
  }

  async expectLearningAndDevelopmentText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.learningAndDevelopment), expected, timeoutMs);
  }

  async expectLearningAndDevelopmentContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.learningAndDevelopment), substring, timeoutMs);
  }

  async expectLearningAndDevelopmentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.learningAndDevelopment), value, timeoutMs);
  }

  async expectLearningAndDevelopmentEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.learningAndDevelopment), timeoutMs);
  }

  async expectLearningAndDevelopmentDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.learningAndDevelopment), timeoutMs);
  }

  async expectLearningAndDevelopmentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.learningAndDevelopment), timeoutMs);
  }

  async expectLearningAndDevelopmentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.learningAndDevelopment), timeoutMs);
  }

  async expectLearningAndDevelopmentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.learningAndDevelopment), timeoutMs);
  }

  async expectLearningAndDevelopmentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.learningAndDevelopment), count, timeoutMs);
  }

  async scrollLearningAndDevelopmentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.learningAndDevelopment));
  }

  async longPressUnsaveNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.unsaveNews));
  }

  async expectUnsaveNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.unsaveNews), timeoutMs);
  }

  async expectUnsaveNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.unsaveNews), expected, timeoutMs);
  }

  async expectUnsaveNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.unsaveNews), substring, timeoutMs);
  }

  async expectUnsaveNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.unsaveNews), value, timeoutMs);
  }

  async expectUnsaveNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.unsaveNews), timeoutMs);
  }

  async expectUnsaveNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.unsaveNews), timeoutMs);
  }

  async expectUnsaveNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.unsaveNews), timeoutMs);
  }

  async expectUnsaveNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.unsaveNews), timeoutMs);
  }

  async expectUnsaveNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.unsaveNews), timeoutMs);
  }

  async expectUnsaveNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.unsaveNews), count, timeoutMs);
  }

  async scrollUnsaveNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.unsaveNews));
  }

  async doubleClickTakeTheNextStepLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink));
  }

  async longPressTakeTheNextStepLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink));
  }

  async expectTakeTheNextStepLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), timeoutMs);
  }

  async expectTakeTheNextStepLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), expected, timeoutMs);
  }

  async expectTakeTheNextStepLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), substring, timeoutMs);
  }

  async expectTakeTheNextStepLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), value, timeoutMs);
  }

  async expectTakeTheNextStepLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), timeoutMs);
  }

  async expectTakeTheNextStepLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), timeoutMs);
  }

  async expectTakeTheNextStepLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), timeoutMs);
  }

  async expectTakeTheNextStepLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), timeoutMs);
  }

  async expectTakeTheNextStepLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), timeoutMs);
  }

  async expectTakeTheNextStepLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), count, timeoutMs);
  }

  async scrollTakeTheNextStepLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink));
  }

  async doubleClickComment(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.comment));
  }

  async longPressComment(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.comment));
  }

  async expectCommentHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.comment), timeoutMs);
  }

  async expectCommentText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.comment), expected, timeoutMs);
  }

  async expectCommentContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.comment), substring, timeoutMs);
  }

  async expectCommentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.comment), value, timeoutMs);
  }

  async expectCommentEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.comment), timeoutMs);
  }

  async expectCommentDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.comment), timeoutMs);
  }

  async expectCommentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.comment), timeoutMs);
  }

  async expectCommentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.comment), timeoutMs);
  }

  async expectCommentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.comment), timeoutMs);
  }

  async expectCommentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.comment), count, timeoutMs);
  }

  async scrollCommentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.comment));
  }

  async longPressShareNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.shareNews));
  }

  async expectShareNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.shareNews), timeoutMs);
  }

  async expectShareNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.shareNews), expected, timeoutMs);
  }

  async expectShareNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.shareNews), substring, timeoutMs);
  }

  async expectShareNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.shareNews), value, timeoutMs);
  }

  async expectShareNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.shareNews), timeoutMs);
  }

  async expectShareNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.shareNews), timeoutMs);
  }

  async expectShareNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.shareNews), timeoutMs);
  }

  async expectShareNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.shareNews), timeoutMs);
  }

  async expectShareNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.shareNews), timeoutMs);
  }

  async expectShareNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.shareNews), count, timeoutMs);
  }

  async scrollShareNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.shareNews));
  }

  async longPressSwitchToPreviousNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews));
  }

  async expectSwitchToPreviousNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), timeoutMs);
  }

  async expectSwitchToPreviousNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), expected, timeoutMs);
  }

  async expectSwitchToPreviousNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), substring, timeoutMs);
  }

  async expectSwitchToPreviousNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), value, timeoutMs);
  }

  async expectSwitchToPreviousNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), timeoutMs);
  }

  async expectSwitchToPreviousNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), timeoutMs);
  }

  async expectSwitchToPreviousNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), timeoutMs);
  }

  async expectSwitchToPreviousNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), timeoutMs);
  }

  async expectSwitchToPreviousNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), timeoutMs);
  }

  async expectSwitchToPreviousNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), count, timeoutMs);
  }

  async scrollSwitchToPreviousNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews));
  }

  async clickAi(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.ai));
  }

  async doubleClickAi(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.ai));
  }

  async longPressAi(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.ai));
  }

  async expectAiHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.ai), timeoutMs);
  }

  async expectAiText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.ai), expected, timeoutMs);
  }

  async expectAiContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.ai), substring, timeoutMs);
  }

  async expectAiValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.ai), value, timeoutMs);
  }

  async expectAiEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.ai), timeoutMs);
  }

  async expectAiDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.ai), timeoutMs);
  }

  async expectAiChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.ai), timeoutMs);
  }

  async expectAiUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.ai), timeoutMs);
  }

  async expectAiFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.ai), timeoutMs);
  }

  async expectAiCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.ai), count, timeoutMs);
  }

  async scrollAiIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.ai));
  }

  async clickDrakeTiwary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.drakeTiwary));
  }

  async doubleClickDrakeTiwary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.drakeTiwary));
  }

  async longPressDrakeTiwary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.drakeTiwary));
  }

  async expectDrakeTiwaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.drakeTiwary), timeoutMs);
  }

  async expectDrakeTiwaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.drakeTiwary), expected, timeoutMs);
  }

  async expectDrakeTiwaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.drakeTiwary), substring, timeoutMs);
  }

  async expectDrakeTiwaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.drakeTiwary), value, timeoutMs);
  }

  async expectDrakeTiwaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.drakeTiwary), timeoutMs);
  }

  async expectDrakeTiwaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.drakeTiwary), timeoutMs);
  }

  async expectDrakeTiwaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.drakeTiwary), timeoutMs);
  }

  async expectDrakeTiwaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.drakeTiwary), timeoutMs);
  }

  async expectDrakeTiwaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.drakeTiwary), timeoutMs);
  }

  async expectDrakeTiwaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.drakeTiwary), count, timeoutMs);
  }

  async scrollDrakeTiwaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.drakeTiwary));
  }

  async longPressSaveNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.saveNews));
  }

  async expectSaveNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.saveNews), timeoutMs);
  }

  async expectSaveNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.saveNews), expected, timeoutMs);
  }

  async expectSaveNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.saveNews), substring, timeoutMs);
  }

  async expectSaveNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.saveNews), value, timeoutMs);
  }

  async expectSaveNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.saveNews), timeoutMs);
  }

  async expectSaveNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.saveNews), timeoutMs);
  }

  async expectSaveNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.saveNews), timeoutMs);
  }

  async expectSaveNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.saveNews), timeoutMs);
  }

  async expectSaveNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.saveNews), timeoutMs);
  }

  async expectSaveNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.saveNews), count, timeoutMs);
  }

  async scrollSaveNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.saveNews));
  }

  async clickStacyCutrono(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.stacyCutrono));
  }

  async doubleClickStacyCutrono(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.stacyCutrono));
  }

  async longPressStacyCutrono(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.stacyCutrono));
  }

  async expectStacyCutronoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.stacyCutrono), timeoutMs);
  }

  async expectStacyCutronoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.stacyCutrono), expected, timeoutMs);
  }

  async expectStacyCutronoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.stacyCutrono), substring, timeoutMs);
  }

  async expectStacyCutronoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.stacyCutrono), value, timeoutMs);
  }

  async expectStacyCutronoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.stacyCutrono), timeoutMs);
  }

  async expectStacyCutronoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.stacyCutrono), timeoutMs);
  }

  async expectStacyCutronoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.stacyCutrono), timeoutMs);
  }

  async expectStacyCutronoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.stacyCutrono), timeoutMs);
  }

  async expectStacyCutronoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.stacyCutrono), timeoutMs);
  }

  async expectStacyCutronoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.stacyCutrono), count, timeoutMs);
  }

  async scrollStacyCutronoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.stacyCutrono));
  }

  async doubleClickAllEmployeeTownHall(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall));
  }

  async longPressAllEmployeeTownHall(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall));
  }

  async expectAllEmployeeTownHallHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall), timeoutMs);
  }

  async expectAllEmployeeTownHallText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall), expected, timeoutMs);
  }

  async expectAllEmployeeTownHallContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall), substring, timeoutMs);
  }

  async expectAllEmployeeTownHallValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall), value, timeoutMs);
  }

  async expectAllEmployeeTownHallEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall), timeoutMs);
  }

  async expectAllEmployeeTownHallDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall), timeoutMs);
  }

  async expectAllEmployeeTownHallChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall), timeoutMs);
  }

  async expectAllEmployeeTownHallUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall), timeoutMs);
  }

  async expectAllEmployeeTownHallFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall), timeoutMs);
  }

  async expectAllEmployeeTownHallCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall), count, timeoutMs);
  }

  async scrollAllEmployeeTownHallIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHall));
  }

  async clickAshleyAmerson(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.ashleyAmerson));
  }

  async doubleClickAshleyAmerson(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.ashleyAmerson));
  }

  async longPressAshleyAmerson(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.ashleyAmerson));
  }

  async expectAshleyAmersonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.ashleyAmerson), timeoutMs);
  }

  async expectAshleyAmersonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.ashleyAmerson), expected, timeoutMs);
  }

  async expectAshleyAmersonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.ashleyAmerson), substring, timeoutMs);
  }

  async expectAshleyAmersonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.ashleyAmerson), value, timeoutMs);
  }

  async expectAshleyAmersonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.ashleyAmerson), timeoutMs);
  }

  async expectAshleyAmersonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.ashleyAmerson), timeoutMs);
  }

  async expectAshleyAmersonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.ashleyAmerson), timeoutMs);
  }

  async expectAshleyAmersonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.ashleyAmerson), timeoutMs);
  }

  async expectAshleyAmersonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.ashleyAmerson), timeoutMs);
  }

  async expectAshleyAmersonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.ashleyAmerson), count, timeoutMs);
  }

  async scrollAshleyAmersonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.ashleyAmerson));
  }

  async doubleClickCelebratingTheStrengthOf(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf));
  }

  async longPressCelebratingTheStrengthOf(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf));
  }

  async expectCelebratingTheStrengthOfHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf), timeoutMs);
  }

  async expectCelebratingTheStrengthOfText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf), expected, timeoutMs);
  }

  async expectCelebratingTheStrengthOfContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf), substring, timeoutMs);
  }

  async expectCelebratingTheStrengthOfValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf), value, timeoutMs);
  }

  async expectCelebratingTheStrengthOfEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf), timeoutMs);
  }

  async expectCelebratingTheStrengthOfDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf), timeoutMs);
  }

  async expectCelebratingTheStrengthOfChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf), timeoutMs);
  }

  async expectCelebratingTheStrengthOfUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf), timeoutMs);
  }

  async expectCelebratingTheStrengthOfFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf), timeoutMs);
  }

  async expectCelebratingTheStrengthOfCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf), count, timeoutMs);
  }

  async scrollCelebratingTheStrengthOfIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf));
  }

  async clickCelebratingTheStrengthOf2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2));
  }

  async doubleClickCelebratingTheStrengthOf2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2));
  }

  async longPressCelebratingTheStrengthOf2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2));
  }

  async expectCelebratingTheStrengthOf2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2), timeoutMs);
  }

  async expectCelebratingTheStrengthOf2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2), expected, timeoutMs);
  }

  async expectCelebratingTheStrengthOf2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2), substring, timeoutMs);
  }

  async expectCelebratingTheStrengthOf2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2), value, timeoutMs);
  }

  async expectCelebratingTheStrengthOf2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2), timeoutMs);
  }

  async expectCelebratingTheStrengthOf2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2), timeoutMs);
  }

  async expectCelebratingTheStrengthOf2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2), timeoutMs);
  }

  async expectCelebratingTheStrengthOf2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2), timeoutMs);
  }

  async expectCelebratingTheStrengthOf2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2), timeoutMs);
  }

  async expectCelebratingTheStrengthOf2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2), count, timeoutMs);
  }

  async scrollCelebratingTheStrengthOf2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOf2));
  }

  async clickChristopherKiklas(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.christopherKiklas));
  }

  async doubleClickChristopherKiklas(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.christopherKiklas));
  }

  async longPressChristopherKiklas(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.christopherKiklas));
  }

  async expectChristopherKiklasHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.christopherKiklas), timeoutMs);
  }

  async expectChristopherKiklasText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.christopherKiklas), expected, timeoutMs);
  }

  async expectChristopherKiklasContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.christopherKiklas), substring, timeoutMs);
  }

  async expectChristopherKiklasValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.christopherKiklas), value, timeoutMs);
  }

  async expectChristopherKiklasEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.christopherKiklas), timeoutMs);
  }

  async expectChristopherKiklasDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.christopherKiklas), timeoutMs);
  }

  async expectChristopherKiklasChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.christopherKiklas), timeoutMs);
  }

  async expectChristopherKiklasUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.christopherKiklas), timeoutMs);
  }

  async expectChristopherKiklasFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.christopherKiklas), timeoutMs);
  }

  async expectChristopherKiklasCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.christopherKiklas), count, timeoutMs);
  }

  async scrollChristopherKiklasIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.christopherKiklas));
  }

  async clickLatestNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.latestNews));
  }

  async doubleClickLatestNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.latestNews));
  }

  async longPressLatestNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.latestNews));
  }

  async expectLatestNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs);
  }

  async expectLatestNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.latestNews), expected, timeoutMs);
  }

  async expectLatestNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.latestNews), substring, timeoutMs);
  }

  async expectLatestNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.latestNews), value, timeoutMs);
  }

  async expectLatestNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs);
  }

  async expectLatestNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs);
  }

  async expectLatestNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs);
  }

  async expectLatestNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs);
  }

  async expectLatestNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs);
  }

  async expectLatestNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.latestNews), count, timeoutMs);
  }

  async scrollLatestNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.latestNews));
  }

  async doubleClickGtmMarketing(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.gtmMarketing));
  }

  async longPressGtmMarketing(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.gtmMarketing));
  }

  async expectGtmMarketingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.gtmMarketing), timeoutMs);
  }

  async expectGtmMarketingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.gtmMarketing), expected, timeoutMs);
  }

  async expectGtmMarketingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.gtmMarketing), substring, timeoutMs);
  }

  async expectGtmMarketingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.gtmMarketing), value, timeoutMs);
  }

  async expectGtmMarketingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.gtmMarketing), timeoutMs);
  }

  async expectGtmMarketingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.gtmMarketing), timeoutMs);
  }

  async expectGtmMarketingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.gtmMarketing), timeoutMs);
  }

  async expectGtmMarketingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.gtmMarketing), timeoutMs);
  }

  async expectGtmMarketingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.gtmMarketing), timeoutMs);
  }

  async expectGtmMarketingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.gtmMarketing), count, timeoutMs);
  }

  async scrollGtmMarketingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.gtmMarketing));
  }

  async doubleClickTuneInTodayUkgAdLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAdLink));
  }

  async longPressTuneInTodayUkgAdLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAdLink));
  }

  async expectTuneInTodayUkgAdLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAdLink), timeoutMs);
  }

  async expectTuneInTodayUkgAdLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAdLink), expected, timeoutMs);
  }

  async expectTuneInTodayUkgAdLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAdLink), substring, timeoutMs);
  }

  async expectTuneInTodayUkgAdLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAdLink), value, timeoutMs);
  }

  async expectTuneInTodayUkgAdLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAdLink), timeoutMs);
  }

  async expectTuneInTodayUkgAdLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAdLink), timeoutMs);
  }

  async expectTuneInTodayUkgAdLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAdLink), timeoutMs);
  }

  async expectTuneInTodayUkgAdLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAdLink), timeoutMs);
  }

  async expectTuneInTodayUkgAdLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAdLink), timeoutMs);
  }

  async expectTuneInTodayUkgAdLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAdLink), count, timeoutMs);
  }

  async scrollTuneInTodayUkgAdLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.tuneInTodayUkgAdLink));
  }

  async longPressEnglishUnitedStates(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.englishUnitedStates));
  }

  async expectEnglishUnitedStatesHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.englishUnitedStates), timeoutMs);
  }

  async expectEnglishUnitedStatesText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.englishUnitedStates), expected, timeoutMs);
  }

  async expectEnglishUnitedStatesContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.englishUnitedStates), substring, timeoutMs);
  }

  async expectEnglishUnitedStatesValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.englishUnitedStates), value, timeoutMs);
  }

  async expectEnglishUnitedStatesEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.englishUnitedStates), timeoutMs);
  }

  async expectEnglishUnitedStatesDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.englishUnitedStates), timeoutMs);
  }

  async expectEnglishUnitedStatesChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.englishUnitedStates), timeoutMs);
  }

  async expectEnglishUnitedStatesUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.englishUnitedStates), timeoutMs);
  }

  async expectEnglishUnitedStatesFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.englishUnitedStates), timeoutMs);
  }

  async expectEnglishUnitedStatesCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.englishUnitedStates), count, timeoutMs);
  }

  async scrollEnglishUnitedStatesIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.englishUnitedStates));
  }

  async longPressChat(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.chat));
  }

  async expectChatHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.chat), timeoutMs);
  }

  async expectChatText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.chat), expected, timeoutMs);
  }

  async expectChatContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.chat), substring, timeoutMs);
  }

  async expectChatValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.chat), value, timeoutMs);
  }

  async expectChatEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.chat), timeoutMs);
  }

  async expectChatDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.chat), timeoutMs);
  }

  async expectChatChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.chat), timeoutMs);
  }

  async expectChatUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.chat), timeoutMs);
  }

  async expectChatFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.chat), timeoutMs);
  }

  async expectChatCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.chat), count, timeoutMs);
  }

  async scrollChatIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.chat));
  }

  async doubleClickNoNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.noNews));
  }

  async longPressNoNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.noNews));
  }

  async expectNoNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.noNews), timeoutMs);
  }

  async expectNoNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.noNews), expected, timeoutMs);
  }

  async expectNoNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.noNews), substring, timeoutMs);
  }

  async expectNoNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.noNews), value, timeoutMs);
  }

  async expectNoNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.noNews), timeoutMs);
  }

  async expectNoNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.noNews), timeoutMs);
  }

  async expectNoNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.noNews), timeoutMs);
  }

  async expectNoNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.noNews), timeoutMs);
  }

  async expectNoNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.noNews), timeoutMs);
  }

  async expectNoNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.noNews), count, timeoutMs);
  }

  async scrollNoNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.noNews));
  }

  async clickNoSavedNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.noSavedNews));
  }

  async doubleClickNoSavedNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.noSavedNews));
  }

  async longPressNoSavedNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.noSavedNews));
  }

  async expectNoSavedNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.noSavedNews), timeoutMs);
  }

  async expectNoSavedNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.noSavedNews), expected, timeoutMs);
  }

  async expectNoSavedNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.noSavedNews), substring, timeoutMs);
  }

  async expectNoSavedNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.noSavedNews), value, timeoutMs);
  }

  async expectNoSavedNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.noSavedNews), timeoutMs);
  }

  async expectNoSavedNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.noSavedNews), timeoutMs);
  }

  async expectNoSavedNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.noSavedNews), timeoutMs);
  }

  async expectNoSavedNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.noSavedNews), timeoutMs);
  }

  async expectNoSavedNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.noSavedNews), timeoutMs);
  }

  async expectNoSavedNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.noSavedNews), count, timeoutMs);
  }

  async scrollNoSavedNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.noSavedNews));
  }

  async doubleClickTakeTheNextStep(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep));
  }

  async longPressTakeTheNextStep(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep));
  }

  async expectTakeTheNextStepHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.takeTheNextStep), timeoutMs);
  }

  async expectTakeTheNextStepText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.takeTheNextStep), expected, timeoutMs);
  }

  async expectTakeTheNextStepContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.takeTheNextStep), substring, timeoutMs);
  }

  async expectTakeTheNextStepValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.takeTheNextStep), value, timeoutMs);
  }

  async expectTakeTheNextStepEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStep), timeoutMs);
  }

  async expectTakeTheNextStepDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStep), timeoutMs);
  }

  async expectTakeTheNextStepChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStep), timeoutMs);
  }

  async expectTakeTheNextStepUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStep), timeoutMs);
  }

  async expectTakeTheNextStepFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.takeTheNextStep), timeoutMs);
  }

  async expectTakeTheNextStepCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.takeTheNextStep), count, timeoutMs);
  }

  async scrollTakeTheNextStepIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep));
  }

  async clickTakeTheNextStep2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2));
  }

  async doubleClickTakeTheNextStep2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2));
  }

  async longPressTakeTheNextStep2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2));
  }

  async expectTakeTheNextStep2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2), timeoutMs);
  }

  async expectTakeTheNextStep2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2), expected, timeoutMs);
  }

  async expectTakeTheNextStep2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2), substring, timeoutMs);
  }

  async expectTakeTheNextStep2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2), value, timeoutMs);
  }

  async expectTakeTheNextStep2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2), timeoutMs);
  }

  async expectTakeTheNextStep2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2), timeoutMs);
  }

  async expectTakeTheNextStep2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2), timeoutMs);
  }

  async expectTakeTheNextStep2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2), timeoutMs);
  }

  async expectTakeTheNextStep2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2), timeoutMs);
  }

  async expectTakeTheNextStep2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2), count, timeoutMs);
  }

  async scrollTakeTheNextStep2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStep2));
  }

}
