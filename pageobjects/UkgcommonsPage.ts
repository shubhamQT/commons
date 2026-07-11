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

export class UkgcommonsPage {
  private static readonly L = {
    userProfile: { strategy: 'css' as const, value: '[class*="Header_profilePic"]', actionKind: 'generic' as const },
    searchNewsSitesOr: { strategy: 'placeholder' as const, value: 'Search news, sites, or events ', actionKind: 'textbox' as const },
    searchIcon: { strategy: 'altText' as const, value: 'search_icon', actionKind: 'generic' as const },
    announcements: { strategy: 'css' as const, value: '[class*="Announcement_announcementSection"]', actionKind: 'generic' as const },
    prevSwitchToOtherAnnouncement: { strategy: 'css' as const, value: 'button.slick-prev[aria-label="switch to other announcement"]', actionKind: 'button' as const },
    nextSwitchToOtherAnnouncement: { strategy: 'css' as const, value: 'button.slick-next[aria-label="switch to other announcement"]', actionKind: 'button' as const },
    featuredNewsTitle: { strategy: 'text' as const, value: 'Featured', actionKind: 'generic' as const },
    switchToPreviousNews: { strategy: 'role' as const, value: 'switch to previous news', role: 'button', actionKind: 'button' as const },
    aiMedia: { strategy: 'css' as const, value: '[class*="FeaturedNews_desktopCardMedia"]', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'AI', scopeIndex: 0, actionKind: 'generic' as const },
    aiTitle: { strategy: 'text' as const, value: 'AI', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'AI', scopeIndex: 0, actionKind: 'text' as const },
    aiDrakeTiwary: { strategy: 'text' as const, value: 'Drake Tiwary', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'AI', scopeIndex: 0, actionKind: 'text' as const },
    aiShareNews: { strategy: 'role' as const, value: 'Share news', role: 'button', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'AI', scopeIndex: 0, actionKind: 'button' as const },
    aiSaveNews: { strategy: 'role' as const, value: 'Save news', role: 'button', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'AI', scopeIndex: 0, actionKind: 'button' as const },
    takeTheNextStepInYourDev: { strategy: 'altText' as const, value: 'Take the next step in your development at UKG', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Take the next step in your development at UKG', scopeIndex: 0, actionKind: 'generic' as const },
    takeTheNextStepInYourDevStacyCutrono: { strategy: 'text' as const, value: 'Stacy Cutrono', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Take the next step in your development at UKG', scopeIndex: 0, actionKind: 'text' as const },
    takeTheNextStepInYourDevShareNews: { strategy: 'role' as const, value: 'Share news', role: 'button', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Take the next step in your development at UKG', scopeIndex: 0, actionKind: 'button' as const },
    takeTheNextStepInYourDevSaveNews: { strategy: 'role' as const, value: 'Save news', role: 'button', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Take the next step in your development at UKG', scopeIndex: 0, actionKind: 'button' as const },
    allEmployeeTownHallJune: { strategy: 'altText' as const, value: 'All-Employee Town Hall - June 2026', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'All-Employee Town Hall - June 2026', scopeIndex: 0, actionKind: 'generic' as const },
    allEmployeeTownHallJuneAshleyAmerson: { strategy: 'text' as const, value: 'Ashley Amerson', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'All-Employee Town Hall - June 2026', scopeIndex: 0, actionKind: 'text' as const },
    allEmployeeTownHallJuneShareNews: { strategy: 'role' as const, value: 'Share news', role: 'button', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'All-Employee Town Hall - June 2026', scopeIndex: 0, actionKind: 'button' as const },
    allEmployeeTownHallJuneSaveNews: { strategy: 'role' as const, value: 'Save news', role: 'button', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'All-Employee Town Hall - June 2026', scopeIndex: 0, actionKind: 'button' as const },
    celebratingTheStrengthOfTh: { strategy: 'altText' as const, value: 'Celebrating the strength of the UKG Ready partner network', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Celebrating the strength of the UKG Ready partner network', scopeIndex: 0, actionKind: 'generic' as const },
    celebratingTheStrengthOfTitle: { strategy: 'text' as const, value: 'Celebrating the strength of the UKG Ready partner', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Celebrating the strength of the UKG Ready partner network', scopeIndex: 0, actionKind: 'text' as const },
    celebratingTheStrengthOfThShareNews: { strategy: 'role' as const, value: 'Share news', role: 'button', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Celebrating the strength of the UKG Ready partner network', scopeIndex: 0, actionKind: 'button' as const },
    celebratingTheStrengthOfThSaveNews: { strategy: 'role' as const, value: 'Save news', role: 'button', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Celebrating the strength of the UKG Ready partner network', scopeIndex: 0, actionKind: 'button' as const },
    switchToNextNews: { strategy: 'role' as const, value: 'switch to next news', role: 'button', actionKind: 'button' as const },
    latestNewsTitle: { strategy: 'role' as const, value: 'Latest internal news', role: 'button', actionKind: 'button' as const },
    theRoleOfHrInAShrinkingGtmMarketing: { strategy: 'role' as const, value: 'GTM: Marketing', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'The Role of HR in a Shrinking Higher Ed', scopeIndex: 1, actionKind: 'link' as const },
    theRoleOfHrInAShrinkingSaveNews: { strategy: 'role' as const, value: 'Save news', role: 'button', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'The Role of HR in a Shrinking Higher Ed', scopeIndex: 1, actionKind: 'button' as const },
    theRoleOfHrLink: { strategy: 'role' as const, value: 'The Role of HR in a Shrinking Higher Ed', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'The Role of HR in a Shrinking Higher Ed', scopeIndex: 1, actionKind: 'link' as const },
    theRoleOfHrInAShrinkingComment: { strategy: 'altText' as const, value: 'comment', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'The Role of HR in a Shrinking Higher Ed', scopeIndex: 1, actionKind: 'generic' as const },
    theRoleOfHrInAShrinkingShareNews: { strategy: 'role' as const, value: 'Share news', role: 'button', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'The Role of HR in a Shrinking Higher Ed', scopeIndex: 1, actionKind: 'button' as const },
    latestNewsTitleRequestsOverview: { strategy: 'text' as const, value: 'Requests overview', actionKind: 'generic' as const },
    myRequests0: { strategy: 'role' as const, value: 'My requests (0)', role: 'button', actionKind: 'button' as const },
    assignedTrainingTitle: { strategy: 'text' as const, value: 'Assigned training', actionKind: 'generic' as const },
    tasks: { strategy: 'css' as const, value: '[class*="MicrosoftToDo_selectedCategory"]', actionKind: 'generic' as const },
    addATask: { strategy: 'placeholder' as const, value: 'Add a task', actionKind: 'textbox' as const },
    hotJobs: { strategy: 'css' as const, value: '[class*="HotJobs_hotJobs"]', actionKind: 'generic' as const },
    hotJobsTitle: { strategy: 'text' as const, value: 'Hot jobs', actionKind: 'generic' as const },
    hotJobsAreFeatured: { strategy: 'role' as const, value: 'Hot Jobs are featured roles that are in high demand across the organization and often require specialized or business-critical skills. These positions are highlighted to increase visibility and attract qualified talent to priority hiring and internal mobility opportunities.', role: 'img', actionKind: 'generic' as const },
    jagadeeshMUkgCom: { strategy: 'text' as const, value: 'jagadeesh.m@ukg.com', actionKind: 'text' as const },
    viewAccount: { strategy: 'css' as const, value: '[class*="Header_viewAccount"]', actionKind: 'generic' as const },
    mySavedNews: { strategy: 'text' as const, value: 'My saved news', actionKind: 'generic' as const },
    customizeHomePageLayout: { strategy: 'text' as const, value: 'Customize home page layout', actionKind: 'generic' as const },
    aiUnsaveNews: { strategy: 'role' as const, value: 'Unsave news', role: 'button', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'AI', scopeIndex: 0, actionKind: 'button' as const },
    newsSavedSuccessfully: { strategy: 'text' as const, value: 'News saved successfully!', actionKind: 'text' as const },
    viewSavedNewsUnder: { strategy: 'role' as const, value: 'View saved news under your profile.', role: 'link', actionKind: 'link' as const },
    takeTheNextStepInYourDevUnsaveNews: { strategy: 'role' as const, value: 'Unsave news', role: 'button', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Take the next step in your development at UKG', scopeIndex: 0, actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickUserProfile(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.userProfile));
  }

  async expectUserProfileVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.userProfile), timeoutMs, soft);
  }

  async expectUserProfileHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.userProfile), timeoutMs, soft);
  }

  async expectUserProfileEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.userProfile), timeoutMs, soft);
  }

  async expectUserProfileDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.userProfile), timeoutMs, soft);
  }

  async expectUserProfileText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.userProfile), expected, timeoutMs, soft);
  }

  async expectUserProfileContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.userProfile), substring, timeoutMs, soft);
  }

  async scrollUserProfileIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.userProfile));
  }

  async fillSearchNewsSitesOr(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, UkgcommonsPage.L.searchNewsSitesOr), value);
  }

  async clearSearchNewsSitesOr(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, UkgcommonsPage.L.searchNewsSitesOr));
  }

  async getSearchNewsSitesOrValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.searchNewsSitesOr));
  }

  async typeTextSearchNewsSitesOr(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.searchNewsSitesOr), value);
  }

  async expectSearchNewsSitesOrVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.searchNewsSitesOr), timeoutMs, soft);
  }

  async expectSearchNewsSitesOrHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.searchNewsSitesOr), timeoutMs, soft);
  }

  async expectSearchNewsSitesOrEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.searchNewsSitesOr), timeoutMs, soft);
  }

  async expectSearchNewsSitesOrDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.searchNewsSitesOr), timeoutMs, soft);
  }

  async expectSearchNewsSitesOrValue(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.searchNewsSitesOr), expected, timeoutMs, soft);
  }

  async expectSearchNewsSitesOrFocused(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.searchNewsSitesOr), timeoutMs, soft);
  }

  async scrollSearchNewsSitesOrIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.searchNewsSitesOr));
  }

  async clickSearchIcon(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.searchIcon));
  }

  async expectSearchIconVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.searchIcon), timeoutMs, soft);
  }

  async expectSearchIconHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.searchIcon), timeoutMs, soft);
  }

  async expectSearchIconEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.searchIcon), timeoutMs, soft);
  }

  async expectSearchIconDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.searchIcon), timeoutMs, soft);
  }

  async expectSearchIconText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.searchIcon), expected, timeoutMs, soft);
  }

  async expectSearchIconContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.searchIcon), substring, timeoutMs, soft);
  }

  async scrollSearchIconIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.searchIcon));
  }

  async clickAnnouncements(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.announcements));
  }

  async expectAnnouncementsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.announcements), timeoutMs, soft);
  }

  async expectAnnouncementsHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.announcements), timeoutMs, soft);
  }

  async expectAnnouncementsEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.announcements), timeoutMs, soft);
  }

  async expectAnnouncementsDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.announcements), timeoutMs, soft);
  }

  async expectAnnouncementsText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.announcements), expected, timeoutMs, soft);
  }

  async expectAnnouncementsContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.announcements), substring, timeoutMs, soft);
  }

  async scrollAnnouncementsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.announcements));
  }

  async clickPrevSwitchToOtherAnnouncement(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.prevSwitchToOtherAnnouncement));
  }

  async doubleClickPrevSwitchToOtherAnnouncement(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.prevSwitchToOtherAnnouncement));
  }

  async hoverPrevSwitchToOtherAnnouncement(): Promise<void> {
    await hoverWhenVisible(webLocator(this.page, UkgcommonsPage.L.prevSwitchToOtherAnnouncement));
  }

  async expectPrevSwitchToOtherAnnouncementVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.prevSwitchToOtherAnnouncement), timeoutMs, soft);
  }

  async expectPrevSwitchToOtherAnnouncementHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.prevSwitchToOtherAnnouncement), timeoutMs, soft);
  }

  async expectPrevSwitchToOtherAnnouncementEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.prevSwitchToOtherAnnouncement), timeoutMs, soft);
  }

  async expectPrevSwitchToOtherAnnouncementDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.prevSwitchToOtherAnnouncement), timeoutMs, soft);
  }

  async expectPrevSwitchToOtherAnnouncementText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.prevSwitchToOtherAnnouncement), expected, timeoutMs, soft);
  }

  async expectPrevSwitchToOtherAnnouncementContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.prevSwitchToOtherAnnouncement), substring, timeoutMs, soft);
  }

  async scrollPrevSwitchToOtherAnnouncementIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.prevSwitchToOtherAnnouncement));
  }

  async clickNextSwitchToOtherAnnouncement(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.nextSwitchToOtherAnnouncement));
  }

  async doubleClickNextSwitchToOtherAnnouncement(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.nextSwitchToOtherAnnouncement));
  }

  async hoverNextSwitchToOtherAnnouncement(): Promise<void> {
    await hoverWhenVisible(webLocator(this.page, UkgcommonsPage.L.nextSwitchToOtherAnnouncement));
  }

  async expectNextSwitchToOtherAnnouncementVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.nextSwitchToOtherAnnouncement), timeoutMs, soft);
  }

  async expectNextSwitchToOtherAnnouncementHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.nextSwitchToOtherAnnouncement), timeoutMs, soft);
  }

  async expectNextSwitchToOtherAnnouncementEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.nextSwitchToOtherAnnouncement), timeoutMs, soft);
  }

  async expectNextSwitchToOtherAnnouncementDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.nextSwitchToOtherAnnouncement), timeoutMs, soft);
  }

  async expectNextSwitchToOtherAnnouncementText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.nextSwitchToOtherAnnouncement), expected, timeoutMs, soft);
  }

  async expectNextSwitchToOtherAnnouncementContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.nextSwitchToOtherAnnouncement), substring, timeoutMs, soft);
  }

  async scrollNextSwitchToOtherAnnouncementIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.nextSwitchToOtherAnnouncement));
  }

  async clickFeaturedNewsTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.featuredNewsTitle));
  }

  async expectFeaturedNewsTitleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.featuredNewsTitle), timeoutMs, soft);
  }

  async expectFeaturedNewsTitleHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.featuredNewsTitle), timeoutMs, soft);
  }

  async expectFeaturedNewsTitleEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.featuredNewsTitle), timeoutMs, soft);
  }

  async expectFeaturedNewsTitleDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.featuredNewsTitle), timeoutMs, soft);
  }

  async expectFeaturedNewsTitleText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.featuredNewsTitle), expected, timeoutMs, soft);
  }

  async expectFeaturedNewsTitleContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.featuredNewsTitle), substring, timeoutMs, soft);
  }

  async scrollFeaturedNewsTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.featuredNewsTitle));
  }

  async clickSwitchToPreviousNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.switchToPreviousNews));
  }

  async doubleClickSwitchToPreviousNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.switchToPreviousNews));
  }

  async hoverSwitchToPreviousNews(): Promise<void> {
    await hoverWhenVisible(webLocator(this.page, UkgcommonsPage.L.switchToPreviousNews));
  }

  async expectSwitchToPreviousNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.switchToPreviousNews), timeoutMs, soft);
  }

  async expectSwitchToPreviousNewsHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.switchToPreviousNews), timeoutMs, soft);
  }

  async expectSwitchToPreviousNewsEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.switchToPreviousNews), timeoutMs, soft);
  }

  async expectSwitchToPreviousNewsDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.switchToPreviousNews), timeoutMs, soft);
  }

  async expectSwitchToPreviousNewsText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.switchToPreviousNews), expected, timeoutMs, soft);
  }

  async expectSwitchToPreviousNewsContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.switchToPreviousNews), substring, timeoutMs, soft);
  }

  async scrollSwitchToPreviousNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.switchToPreviousNews));
  }

  async clickAiMedia(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiMedia));
  }

  async expectAiMediaVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.aiMedia), timeoutMs, soft);
  }

  async expectAiMediaHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.aiMedia), timeoutMs, soft);
  }

  async expectAiMediaEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.aiMedia), timeoutMs, soft);
  }

  async expectAiMediaDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.aiMedia), timeoutMs, soft);
  }

  async expectAiMediaText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.aiMedia), expected, timeoutMs, soft);
  }

  async expectAiMediaContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.aiMedia), substring, timeoutMs, soft);
  }

  async scrollAiMediaIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiMedia));
  }

  async getInnerTextAiTitle(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiTitle));
  }

  async expectAiTitleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.aiTitle), timeoutMs, soft);
  }

  async expectAiTitleHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.aiTitle), timeoutMs, soft);
  }

  async expectAiTitleText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.aiTitle), expected, timeoutMs, soft);
  }

  async expectAiTitleContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.aiTitle), substring, timeoutMs, soft);
  }

  async scrollAiTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiTitle));
  }

  async getInnerTextAiDrakeTiwary(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiDrakeTiwary));
  }

  async expectAiDrakeTiwaryVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.aiDrakeTiwary), timeoutMs, soft);
  }

  async expectAiDrakeTiwaryHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.aiDrakeTiwary), timeoutMs, soft);
  }

  async expectAiDrakeTiwaryText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.aiDrakeTiwary), expected, timeoutMs, soft);
  }

  async expectAiDrakeTiwaryContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.aiDrakeTiwary), substring, timeoutMs, soft);
  }

  async scrollAiDrakeTiwaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiDrakeTiwary));
  }

  async clickAiShareNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiShareNews));
  }

  async doubleClickAiShareNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiShareNews));
  }

  async hoverAiShareNews(): Promise<void> {
    await hoverWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiShareNews));
  }

  async expectAiShareNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.aiShareNews), timeoutMs, soft);
  }

  async expectAiShareNewsHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.aiShareNews), timeoutMs, soft);
  }

  async expectAiShareNewsEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.aiShareNews), timeoutMs, soft);
  }

  async expectAiShareNewsDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.aiShareNews), timeoutMs, soft);
  }

  async expectAiShareNewsText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.aiShareNews), expected, timeoutMs, soft);
  }

  async expectAiShareNewsContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.aiShareNews), substring, timeoutMs, soft);
  }

  async scrollAiShareNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiShareNews));
  }

  async clickAiSaveNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiSaveNews));
  }

  async doubleClickAiSaveNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiSaveNews));
  }

  async hoverAiSaveNews(): Promise<void> {
    await hoverWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiSaveNews));
  }

  async expectAiSaveNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.aiSaveNews), timeoutMs, soft);
  }

  async expectAiSaveNewsHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.aiSaveNews), timeoutMs, soft);
  }

  async expectAiSaveNewsEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.aiSaveNews), timeoutMs, soft);
  }

  async expectAiSaveNewsDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.aiSaveNews), timeoutMs, soft);
  }

  async expectAiSaveNewsText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.aiSaveNews), expected, timeoutMs, soft);
  }

  async expectAiSaveNewsContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.aiSaveNews), substring, timeoutMs, soft);
  }

  async scrollAiSaveNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiSaveNews));
  }

  async clickTakeTheNextStepInYourDev(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDev));
  }

  async expectTakeTheNextStepInYourDevVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDev), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDev), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDev), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDev), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDev), expected, timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDev), substring, timeoutMs, soft);
  }

  async scrollTakeTheNextStepInYourDevIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDev));
  }

  async getInnerTextTakeTheNextStepInYourDevStacyCutrono(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevStacyCutrono));
  }

  async expectTakeTheNextStepInYourDevStacyCutronoVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevStacyCutrono), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevStacyCutrono), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevStacyCutrono), expected, timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevStacyCutrono), substring, timeoutMs, soft);
  }

  async scrollTakeTheNextStepInYourDevStacyCutronoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevStacyCutrono));
  }

  async clickTakeTheNextStepInYourDevShareNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevShareNews));
  }

  async doubleClickTakeTheNextStepInYourDevShareNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevShareNews));
  }

  async hoverTakeTheNextStepInYourDevShareNews(): Promise<void> {
    await hoverWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevShareNews));
  }

  async expectTakeTheNextStepInYourDevShareNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevShareNews), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevShareNewsHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevShareNews), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevShareNewsEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevShareNews), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevShareNewsDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevShareNews), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevShareNewsText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevShareNews), expected, timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevShareNewsContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevShareNews), substring, timeoutMs, soft);
  }

  async scrollTakeTheNextStepInYourDevShareNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevShareNews));
  }

  async clickTakeTheNextStepInYourDevSaveNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevSaveNews));
  }

  async doubleClickTakeTheNextStepInYourDevSaveNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevSaveNews));
  }

  async hoverTakeTheNextStepInYourDevSaveNews(): Promise<void> {
    await hoverWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevSaveNews));
  }

  async expectTakeTheNextStepInYourDevSaveNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevSaveNews), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevSaveNewsHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevSaveNews), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevSaveNewsEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevSaveNews), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevSaveNewsDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevSaveNews), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevSaveNewsText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevSaveNews), expected, timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevSaveNewsContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevSaveNews), substring, timeoutMs, soft);
  }

  async scrollTakeTheNextStepInYourDevSaveNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevSaveNews));
  }

  async clickAllEmployeeTownHallJune(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJune));
  }

  async expectAllEmployeeTownHallJuneVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJune), timeoutMs, soft);
  }

  async expectAllEmployeeTownHallJuneHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJune), timeoutMs, soft);
  }

  async expectAllEmployeeTownHallJuneEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJune), timeoutMs, soft);
  }

  async expectAllEmployeeTownHallJuneDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJune), timeoutMs, soft);
  }

  async expectAllEmployeeTownHallJuneText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJune), expected, timeoutMs, soft);
  }

  async expectAllEmployeeTownHallJuneContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJune), substring, timeoutMs, soft);
  }

  async scrollAllEmployeeTownHallJuneIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJune));
  }

  async getInnerTextAllEmployeeTownHallJuneAshleyAmerson(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneAshleyAmerson));
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneAshleyAmerson), timeoutMs, soft);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneAshleyAmerson), timeoutMs, soft);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneAshleyAmerson), expected, timeoutMs, soft);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneAshleyAmerson), substring, timeoutMs, soft);
  }

  async scrollAllEmployeeTownHallJuneAshleyAmersonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneAshleyAmerson));
  }

  async clickAllEmployeeTownHallJuneShareNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneShareNews));
  }

  async doubleClickAllEmployeeTownHallJuneShareNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneShareNews));
  }

  async hoverAllEmployeeTownHallJuneShareNews(): Promise<void> {
    await hoverWhenVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneShareNews));
  }

  async expectAllEmployeeTownHallJuneShareNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneShareNews), timeoutMs, soft);
  }

  async expectAllEmployeeTownHallJuneShareNewsHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneShareNews), timeoutMs, soft);
  }

  async expectAllEmployeeTownHallJuneShareNewsEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneShareNews), timeoutMs, soft);
  }

  async expectAllEmployeeTownHallJuneShareNewsDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneShareNews), timeoutMs, soft);
  }

  async expectAllEmployeeTownHallJuneShareNewsText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneShareNews), expected, timeoutMs, soft);
  }

  async expectAllEmployeeTownHallJuneShareNewsContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneShareNews), substring, timeoutMs, soft);
  }

  async scrollAllEmployeeTownHallJuneShareNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneShareNews));
  }

  async clickAllEmployeeTownHallJuneSaveNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneSaveNews));
  }

  async doubleClickAllEmployeeTownHallJuneSaveNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneSaveNews));
  }

  async hoverAllEmployeeTownHallJuneSaveNews(): Promise<void> {
    await hoverWhenVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneSaveNews));
  }

  async expectAllEmployeeTownHallJuneSaveNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneSaveNews), timeoutMs, soft);
  }

  async expectAllEmployeeTownHallJuneSaveNewsHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneSaveNews), timeoutMs, soft);
  }

  async expectAllEmployeeTownHallJuneSaveNewsEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneSaveNews), timeoutMs, soft);
  }

  async expectAllEmployeeTownHallJuneSaveNewsDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneSaveNews), timeoutMs, soft);
  }

  async expectAllEmployeeTownHallJuneSaveNewsText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneSaveNews), expected, timeoutMs, soft);
  }

  async expectAllEmployeeTownHallJuneSaveNewsContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneSaveNews), substring, timeoutMs, soft);
  }

  async scrollAllEmployeeTownHallJuneSaveNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneSaveNews));
  }

  async clickCelebratingTheStrengthOfTh(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTh));
  }

  async expectCelebratingTheStrengthOfThVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTh), timeoutMs, soft);
  }

  async expectCelebratingTheStrengthOfThHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTh), timeoutMs, soft);
  }

  async expectCelebratingTheStrengthOfThEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTh), timeoutMs, soft);
  }

  async expectCelebratingTheStrengthOfThDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTh), timeoutMs, soft);
  }

  async expectCelebratingTheStrengthOfThText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTh), expected, timeoutMs, soft);
  }

  async expectCelebratingTheStrengthOfThContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTh), substring, timeoutMs, soft);
  }

  async scrollCelebratingTheStrengthOfThIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTh));
  }

  async getInnerTextCelebratingTheStrengthOfTitle(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTitle));
  }

  async expectCelebratingTheStrengthOfTitleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTitle), timeoutMs, soft);
  }

  async expectCelebratingTheStrengthOfTitleHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTitle), timeoutMs, soft);
  }

  async expectCelebratingTheStrengthOfTitleText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTitle), expected, timeoutMs, soft);
  }

  async expectCelebratingTheStrengthOfTitleContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTitle), substring, timeoutMs, soft);
  }

  async scrollCelebratingTheStrengthOfTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTitle));
  }

  async clickCelebratingTheStrengthOfThShareNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThShareNews));
  }

  async doubleClickCelebratingTheStrengthOfThShareNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThShareNews));
  }

  async hoverCelebratingTheStrengthOfThShareNews(): Promise<void> {
    await hoverWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThShareNews));
  }

  async expectCelebratingTheStrengthOfThShareNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThShareNews), timeoutMs, soft);
  }

  async expectCelebratingTheStrengthOfThShareNewsHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThShareNews), timeoutMs, soft);
  }

  async expectCelebratingTheStrengthOfThShareNewsEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThShareNews), timeoutMs, soft);
  }

  async expectCelebratingTheStrengthOfThShareNewsDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThShareNews), timeoutMs, soft);
  }

  async expectCelebratingTheStrengthOfThShareNewsText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThShareNews), expected, timeoutMs, soft);
  }

  async expectCelebratingTheStrengthOfThShareNewsContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThShareNews), substring, timeoutMs, soft);
  }

  async scrollCelebratingTheStrengthOfThShareNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThShareNews));
  }

  async clickCelebratingTheStrengthOfThSaveNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThSaveNews));
  }

  async doubleClickCelebratingTheStrengthOfThSaveNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThSaveNews));
  }

  async hoverCelebratingTheStrengthOfThSaveNews(): Promise<void> {
    await hoverWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThSaveNews));
  }

  async expectCelebratingTheStrengthOfThSaveNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThSaveNews), timeoutMs, soft);
  }

  async expectCelebratingTheStrengthOfThSaveNewsHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThSaveNews), timeoutMs, soft);
  }

  async expectCelebratingTheStrengthOfThSaveNewsEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThSaveNews), timeoutMs, soft);
  }

  async expectCelebratingTheStrengthOfThSaveNewsDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThSaveNews), timeoutMs, soft);
  }

  async expectCelebratingTheStrengthOfThSaveNewsText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThSaveNews), expected, timeoutMs, soft);
  }

  async expectCelebratingTheStrengthOfThSaveNewsContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThSaveNews), substring, timeoutMs, soft);
  }

  async scrollCelebratingTheStrengthOfThSaveNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThSaveNews));
  }

  async clickSwitchToNextNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.switchToNextNews));
  }

  async doubleClickSwitchToNextNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.switchToNextNews));
  }

  async hoverSwitchToNextNews(): Promise<void> {
    await hoverWhenVisible(webLocator(this.page, UkgcommonsPage.L.switchToNextNews));
  }

  async expectSwitchToNextNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.switchToNextNews), timeoutMs, soft);
  }

  async expectSwitchToNextNewsHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.switchToNextNews), timeoutMs, soft);
  }

  async expectSwitchToNextNewsEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.switchToNextNews), timeoutMs, soft);
  }

  async expectSwitchToNextNewsDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.switchToNextNews), timeoutMs, soft);
  }

  async expectSwitchToNextNewsText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.switchToNextNews), expected, timeoutMs, soft);
  }

  async expectSwitchToNextNewsContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.switchToNextNews), substring, timeoutMs, soft);
  }

  async scrollSwitchToNextNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.switchToNextNews));
  }

  async clickLatestNewsTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.latestNewsTitle));
  }

  async doubleClickLatestNewsTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.latestNewsTitle));
  }

  async hoverLatestNewsTitle(): Promise<void> {
    await hoverWhenVisible(webLocator(this.page, UkgcommonsPage.L.latestNewsTitle));
  }

  async expectLatestNewsTitleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.latestNewsTitle), timeoutMs, soft);
  }

  async expectLatestNewsTitleHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.latestNewsTitle), timeoutMs, soft);
  }

  async expectLatestNewsTitleEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.latestNewsTitle), timeoutMs, soft);
  }

  async expectLatestNewsTitleDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.latestNewsTitle), timeoutMs, soft);
  }

  async expectLatestNewsTitleText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.latestNewsTitle), expected, timeoutMs, soft);
  }

  async expectLatestNewsTitleContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.latestNewsTitle), substring, timeoutMs, soft);
  }

  async scrollLatestNewsTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.latestNewsTitle));
  }

  async clickTheRoleOfHrInAShrinkingGtmMarketing(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingGtmMarketing));
  }

  async clickTheRoleOfHrInAShrinkingGtmMarketingOpensNewPage(): Promise<Page> {
    return clickOpensNewPage(this.page, webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingGtmMarketing));
  }

  async expectTheRoleOfHrInAShrinkingGtmMarketingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingGtmMarketing), timeoutMs, soft);
  }

  async expectTheRoleOfHrInAShrinkingGtmMarketingHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingGtmMarketing), timeoutMs, soft);
  }

  async expectTheRoleOfHrInAShrinkingGtmMarketingText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingGtmMarketing), expected, timeoutMs, soft);
  }

  async expectTheRoleOfHrInAShrinkingGtmMarketingContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingGtmMarketing), substring, timeoutMs, soft);
  }

  async scrollTheRoleOfHrInAShrinkingGtmMarketingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingGtmMarketing));
  }

  async clickTheRoleOfHrInAShrinkingSaveNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingSaveNews));
  }

  async doubleClickTheRoleOfHrInAShrinkingSaveNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingSaveNews));
  }

  async hoverTheRoleOfHrInAShrinkingSaveNews(): Promise<void> {
    await hoverWhenVisible(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingSaveNews));
  }

  async expectTheRoleOfHrInAShrinkingSaveNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingSaveNews), timeoutMs, soft);
  }

  async expectTheRoleOfHrInAShrinkingSaveNewsHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingSaveNews), timeoutMs, soft);
  }

  async expectTheRoleOfHrInAShrinkingSaveNewsEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingSaveNews), timeoutMs, soft);
  }

  async expectTheRoleOfHrInAShrinkingSaveNewsDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingSaveNews), timeoutMs, soft);
  }

  async expectTheRoleOfHrInAShrinkingSaveNewsText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingSaveNews), expected, timeoutMs, soft);
  }

  async expectTheRoleOfHrInAShrinkingSaveNewsContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingSaveNews), substring, timeoutMs, soft);
  }

  async scrollTheRoleOfHrInAShrinkingSaveNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingSaveNews));
  }

  async clickTheRoleOfHrLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrLink));
  }

  async clickTheRoleOfHrLinkOpensNewPage(): Promise<Page> {
    return clickOpensNewPage(this.page, webLocator(this.page, UkgcommonsPage.L.theRoleOfHrLink));
  }

  async expectTheRoleOfHrLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrLink), timeoutMs, soft);
  }

  async expectTheRoleOfHrLinkHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrLink), timeoutMs, soft);
  }

  async expectTheRoleOfHrLinkText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrLink), expected, timeoutMs, soft);
  }

  async expectTheRoleOfHrLinkContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrLink), substring, timeoutMs, soft);
  }

  async scrollTheRoleOfHrLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrLink));
  }

  async clickTheRoleOfHrInAShrinkingComment(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingComment));
  }

  async expectTheRoleOfHrInAShrinkingCommentVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingComment), timeoutMs, soft);
  }

  async expectTheRoleOfHrInAShrinkingCommentHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingComment), timeoutMs, soft);
  }

  async expectTheRoleOfHrInAShrinkingCommentEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingComment), timeoutMs, soft);
  }

  async expectTheRoleOfHrInAShrinkingCommentDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingComment), timeoutMs, soft);
  }

  async expectTheRoleOfHrInAShrinkingCommentText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingComment), expected, timeoutMs, soft);
  }

  async expectTheRoleOfHrInAShrinkingCommentContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingComment), substring, timeoutMs, soft);
  }

  async scrollTheRoleOfHrInAShrinkingCommentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingComment));
  }

  async clickTheRoleOfHrInAShrinkingShareNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingShareNews));
  }

  async doubleClickTheRoleOfHrInAShrinkingShareNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingShareNews));
  }

  async hoverTheRoleOfHrInAShrinkingShareNews(): Promise<void> {
    await hoverWhenVisible(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingShareNews));
  }

  async expectTheRoleOfHrInAShrinkingShareNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingShareNews), timeoutMs, soft);
  }

  async expectTheRoleOfHrInAShrinkingShareNewsHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingShareNews), timeoutMs, soft);
  }

  async expectTheRoleOfHrInAShrinkingShareNewsEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingShareNews), timeoutMs, soft);
  }

  async expectTheRoleOfHrInAShrinkingShareNewsDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingShareNews), timeoutMs, soft);
  }

  async expectTheRoleOfHrInAShrinkingShareNewsText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingShareNews), expected, timeoutMs, soft);
  }

  async expectTheRoleOfHrInAShrinkingShareNewsContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingShareNews), substring, timeoutMs, soft);
  }

  async scrollTheRoleOfHrInAShrinkingShareNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingShareNews));
  }

  async clickLatestNewsTitleRequestsOverview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.latestNewsTitleRequestsOverview));
  }

  async expectLatestNewsTitleRequestsOverviewVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.latestNewsTitleRequestsOverview), timeoutMs, soft);
  }

  async expectLatestNewsTitleRequestsOverviewHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.latestNewsTitleRequestsOverview), timeoutMs, soft);
  }

  async expectLatestNewsTitleRequestsOverviewEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.latestNewsTitleRequestsOverview), timeoutMs, soft);
  }

  async expectLatestNewsTitleRequestsOverviewDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.latestNewsTitleRequestsOverview), timeoutMs, soft);
  }

  async expectLatestNewsTitleRequestsOverviewText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.latestNewsTitleRequestsOverview), expected, timeoutMs, soft);
  }

  async expectLatestNewsTitleRequestsOverviewContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.latestNewsTitleRequestsOverview), substring, timeoutMs, soft);
  }

  async scrollLatestNewsTitleRequestsOverviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.latestNewsTitleRequestsOverview));
  }

  async clickMyRequests0(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.myRequests0));
  }

  async doubleClickMyRequests0(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.myRequests0));
  }

  async hoverMyRequests0(): Promise<void> {
    await hoverWhenVisible(webLocator(this.page, UkgcommonsPage.L.myRequests0));
  }

  async expectMyRequests0Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.myRequests0), timeoutMs, soft);
  }

  async expectMyRequests0Hidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.myRequests0), timeoutMs, soft);
  }

  async expectMyRequests0Enabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.myRequests0), timeoutMs, soft);
  }

  async expectMyRequests0Disabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.myRequests0), timeoutMs, soft);
  }

  async expectMyRequests0Text(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.myRequests0), expected, timeoutMs, soft);
  }

  async expectMyRequests0ContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.myRequests0), substring, timeoutMs, soft);
  }

  async scrollMyRequests0IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.myRequests0));
  }

  async clickAssignedTrainingTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.assignedTrainingTitle));
  }

  async expectAssignedTrainingTitleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.assignedTrainingTitle), timeoutMs, soft);
  }

  async expectAssignedTrainingTitleHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.assignedTrainingTitle), timeoutMs, soft);
  }

  async expectAssignedTrainingTitleEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.assignedTrainingTitle), timeoutMs, soft);
  }

  async expectAssignedTrainingTitleDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.assignedTrainingTitle), timeoutMs, soft);
  }

  async expectAssignedTrainingTitleText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.assignedTrainingTitle), expected, timeoutMs, soft);
  }

  async expectAssignedTrainingTitleContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.assignedTrainingTitle), substring, timeoutMs, soft);
  }

  async scrollAssignedTrainingTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.assignedTrainingTitle));
  }

  async clickTasks(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.tasks));
  }

  async expectTasksVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.tasks), timeoutMs, soft);
  }

  async expectTasksHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.tasks), timeoutMs, soft);
  }

  async expectTasksEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.tasks), timeoutMs, soft);
  }

  async expectTasksDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.tasks), timeoutMs, soft);
  }

  async expectTasksText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.tasks), expected, timeoutMs, soft);
  }

  async expectTasksContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.tasks), substring, timeoutMs, soft);
  }

  async scrollTasksIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.tasks));
  }

  async fillAddATask(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, UkgcommonsPage.L.addATask), value);
  }

  async clearAddATask(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, UkgcommonsPage.L.addATask));
  }

  async getAddATaskValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.addATask));
  }

  async typeTextAddATask(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.addATask), value);
  }

  async expectAddATaskVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.addATask), timeoutMs, soft);
  }

  async expectAddATaskHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.addATask), timeoutMs, soft);
  }

  async expectAddATaskEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.addATask), timeoutMs, soft);
  }

  async expectAddATaskDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.addATask), timeoutMs, soft);
  }

  async expectAddATaskValue(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.addATask), expected, timeoutMs, soft);
  }

  async expectAddATaskFocused(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.addATask), timeoutMs, soft);
  }

  async scrollAddATaskIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.addATask));
  }

  async clickHotJobs(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.hotJobs));
  }

  async expectHotJobsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.hotJobs), timeoutMs, soft);
  }

  async expectHotJobsHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.hotJobs), timeoutMs, soft);
  }

  async expectHotJobsEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.hotJobs), timeoutMs, soft);
  }

  async expectHotJobsDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.hotJobs), timeoutMs, soft);
  }

  async expectHotJobsText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.hotJobs), expected, timeoutMs, soft);
  }

  async expectHotJobsContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.hotJobs), substring, timeoutMs, soft);
  }

  async scrollHotJobsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.hotJobs));
  }

  async clickHotJobsTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.hotJobsTitle));
  }

  async expectHotJobsTitleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.hotJobsTitle), timeoutMs, soft);
  }

  async expectHotJobsTitleHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.hotJobsTitle), timeoutMs, soft);
  }

  async expectHotJobsTitleEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.hotJobsTitle), timeoutMs, soft);
  }

  async expectHotJobsTitleDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.hotJobsTitle), timeoutMs, soft);
  }

  async expectHotJobsTitleText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.hotJobsTitle), expected, timeoutMs, soft);
  }

  async expectHotJobsTitleContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.hotJobsTitle), substring, timeoutMs, soft);
  }

  async scrollHotJobsTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.hotJobsTitle));
  }

  async clickHotJobsAreFeatured(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.hotJobsAreFeatured));
  }

  async expectHotJobsAreFeaturedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.hotJobsAreFeatured), timeoutMs, soft);
  }

  async expectHotJobsAreFeaturedHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.hotJobsAreFeatured), timeoutMs, soft);
  }

  async expectHotJobsAreFeaturedEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.hotJobsAreFeatured), timeoutMs, soft);
  }

  async expectHotJobsAreFeaturedDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.hotJobsAreFeatured), timeoutMs, soft);
  }

  async expectHotJobsAreFeaturedText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.hotJobsAreFeatured), expected, timeoutMs, soft);
  }

  async expectHotJobsAreFeaturedContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.hotJobsAreFeatured), substring, timeoutMs, soft);
  }

  async scrollHotJobsAreFeaturedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.hotJobsAreFeatured));
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

  async getInnerTextJagadeeshMUkgCom(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.jagadeeshMUkgCom));
  }

  async expectJagadeeshMUkgComVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.jagadeeshMUkgCom), timeoutMs, soft);
  }

  async expectJagadeeshMUkgComHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.jagadeeshMUkgCom), timeoutMs, soft);
  }

  async expectJagadeeshMUkgComText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.jagadeeshMUkgCom), expected, timeoutMs, soft);
  }

  async expectJagadeeshMUkgComContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.jagadeeshMUkgCom), substring, timeoutMs, soft);
  }

  async scrollJagadeeshMUkgComIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.jagadeeshMUkgCom));
  }

  async clickViewAccount(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewAccount));
  }

  async expectViewAccountVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.viewAccount), timeoutMs, soft);
  }

  async expectViewAccountHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.viewAccount), timeoutMs, soft);
  }

  async expectViewAccountEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.viewAccount), timeoutMs, soft);
  }

  async expectViewAccountDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.viewAccount), timeoutMs, soft);
  }

  async expectViewAccountText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.viewAccount), expected, timeoutMs, soft);
  }

  async expectViewAccountContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.viewAccount), substring, timeoutMs, soft);
  }

  async scrollViewAccountIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewAccount));
  }

  async clickMySavedNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.mySavedNews));
  }

  async expectMySavedNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.mySavedNews), timeoutMs, soft);
  }

  async expectMySavedNewsHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.mySavedNews), timeoutMs, soft);
  }

  async expectMySavedNewsEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.mySavedNews), timeoutMs, soft);
  }

  async expectMySavedNewsDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.mySavedNews), timeoutMs, soft);
  }

  async expectMySavedNewsText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.mySavedNews), expected, timeoutMs, soft);
  }

  async expectMySavedNewsContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.mySavedNews), substring, timeoutMs, soft);
  }

  async scrollMySavedNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.mySavedNews));
  }

  async clickCustomizeHomePageLayout(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.customizeHomePageLayout));
  }

  async expectCustomizeHomePageLayoutVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.customizeHomePageLayout), timeoutMs, soft);
  }

  async expectCustomizeHomePageLayoutHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.customizeHomePageLayout), timeoutMs, soft);
  }

  async expectCustomizeHomePageLayoutEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.customizeHomePageLayout), timeoutMs, soft);
  }

  async expectCustomizeHomePageLayoutDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.customizeHomePageLayout), timeoutMs, soft);
  }

  async expectCustomizeHomePageLayoutText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.customizeHomePageLayout), expected, timeoutMs, soft);
  }

  async expectCustomizeHomePageLayoutContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.customizeHomePageLayout), substring, timeoutMs, soft);
  }

  async scrollCustomizeHomePageLayoutIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.customizeHomePageLayout));
  }

  async clickAiUnsaveNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiUnsaveNews));
  }

  async doubleClickAiUnsaveNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiUnsaveNews));
  }

  async hoverAiUnsaveNews(): Promise<void> {
    await hoverWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiUnsaveNews));
  }

  async expectAiUnsaveNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.aiUnsaveNews), timeoutMs, soft);
  }

  async expectAiUnsaveNewsHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.aiUnsaveNews), timeoutMs, soft);
  }

  async expectAiUnsaveNewsEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.aiUnsaveNews), timeoutMs, soft);
  }

  async expectAiUnsaveNewsDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.aiUnsaveNews), timeoutMs, soft);
  }

  async expectAiUnsaveNewsText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.aiUnsaveNews), expected, timeoutMs, soft);
  }

  async expectAiUnsaveNewsContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.aiUnsaveNews), substring, timeoutMs, soft);
  }

  async scrollAiUnsaveNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiUnsaveNews));
  }

  async getInnerTextNewsSavedSuccessfully(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UkgcommonsPage.L.newsSavedSuccessfully));
  }

  async expectNewsSavedSuccessfullyVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.newsSavedSuccessfully), timeoutMs, soft);
  }

  async expectNewsSavedSuccessfullyHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.newsSavedSuccessfully), timeoutMs, soft);
  }

  async expectNewsSavedSuccessfullyText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.newsSavedSuccessfully), expected, timeoutMs, soft);
  }

  async expectNewsSavedSuccessfullyContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.newsSavedSuccessfully), substring, timeoutMs, soft);
  }

  async scrollNewsSavedSuccessfullyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.newsSavedSuccessfully));
  }

  async clickViewSavedNewsUnder(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewSavedNewsUnder));
  }

  async clickViewSavedNewsUnderOpensNewPage(): Promise<Page> {
    return clickOpensNewPage(this.page, webLocator(this.page, UkgcommonsPage.L.viewSavedNewsUnder));
  }

  async expectViewSavedNewsUnderVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.viewSavedNewsUnder), timeoutMs, soft);
  }

  async expectViewSavedNewsUnderHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.viewSavedNewsUnder), timeoutMs, soft);
  }

  async expectViewSavedNewsUnderText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.viewSavedNewsUnder), expected, timeoutMs, soft);
  }

  async expectViewSavedNewsUnderContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.viewSavedNewsUnder), substring, timeoutMs, soft);
  }

  async scrollViewSavedNewsUnderIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewSavedNewsUnder));
  }

  async clickTakeTheNextStepInYourDevUnsaveNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevUnsaveNews));
  }

  async doubleClickTakeTheNextStepInYourDevUnsaveNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevUnsaveNews));
  }

  async hoverTakeTheNextStepInYourDevUnsaveNews(): Promise<void> {
    await hoverWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevUnsaveNews));
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevUnsaveNews), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevUnsaveNews), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevUnsaveNews), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevUnsaveNews), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevUnsaveNews), expected, timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevUnsaveNews), substring, timeoutMs, soft);
  }

  async scrollTakeTheNextStepInYourDevUnsaveNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevUnsaveNews));
  }


  async doubleClickUserProfile(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.userProfile));
  }

  async longPressUserProfile(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.userProfile));
  }

  async expectUserProfileValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.userProfile), value, timeoutMs);
  }

  async expectUserProfileChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.userProfile), timeoutMs);
  }

  async expectUserProfileUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.userProfile), timeoutMs);
  }

  async expectUserProfileFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.userProfile), timeoutMs);
  }

  async expectUserProfileCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.userProfile), count, timeoutMs);
  }

  async expectSearchNewsSitesOrText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.searchNewsSitesOr), expected, timeoutMs);
  }

  async expectSearchNewsSitesOrContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.searchNewsSitesOr), substring, timeoutMs);
  }

  async expectSearchNewsSitesOrChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.searchNewsSitesOr), timeoutMs);
  }

  async expectSearchNewsSitesOrUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.searchNewsSitesOr), timeoutMs);
  }

  async expectSearchNewsSitesOrCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.searchNewsSitesOr), count, timeoutMs);
  }

  async doubleClickSearchIcon(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.searchIcon));
  }

  async longPressSearchIcon(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.searchIcon));
  }

  async expectSearchIconValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.searchIcon), value, timeoutMs);
  }

  async expectSearchIconChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.searchIcon), timeoutMs);
  }

  async expectSearchIconUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.searchIcon), timeoutMs);
  }

  async expectSearchIconFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.searchIcon), timeoutMs);
  }

  async expectSearchIconCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.searchIcon), count, timeoutMs);
  }

  async doubleClickAnnouncements(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.announcements));
  }

  async longPressAnnouncements(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.announcements));
  }

  async expectAnnouncementsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.announcements), value, timeoutMs);
  }

  async expectAnnouncementsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.announcements), timeoutMs);
  }

  async expectAnnouncementsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.announcements), timeoutMs);
  }

  async expectAnnouncementsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.announcements), timeoutMs);
  }

  async expectAnnouncementsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.announcements), count, timeoutMs);
  }

  async longPressPrevSwitchToOtherAnnouncement(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.prevSwitchToOtherAnnouncement));
  }

  async expectPrevSwitchToOtherAnnouncementValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.prevSwitchToOtherAnnouncement), value, timeoutMs);
  }

  async expectPrevSwitchToOtherAnnouncementChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.prevSwitchToOtherAnnouncement), timeoutMs);
  }

  async expectPrevSwitchToOtherAnnouncementUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.prevSwitchToOtherAnnouncement), timeoutMs);
  }

  async expectPrevSwitchToOtherAnnouncementFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.prevSwitchToOtherAnnouncement), timeoutMs);
  }

  async expectPrevSwitchToOtherAnnouncementCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.prevSwitchToOtherAnnouncement), count, timeoutMs);
  }

  async longPressNextSwitchToOtherAnnouncement(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.nextSwitchToOtherAnnouncement));
  }

  async expectNextSwitchToOtherAnnouncementValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.nextSwitchToOtherAnnouncement), value, timeoutMs);
  }

  async expectNextSwitchToOtherAnnouncementChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.nextSwitchToOtherAnnouncement), timeoutMs);
  }

  async expectNextSwitchToOtherAnnouncementUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.nextSwitchToOtherAnnouncement), timeoutMs);
  }

  async expectNextSwitchToOtherAnnouncementFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.nextSwitchToOtherAnnouncement), timeoutMs);
  }

  async expectNextSwitchToOtherAnnouncementCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.nextSwitchToOtherAnnouncement), count, timeoutMs);
  }

  async doubleClickFeaturedNewsTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.featuredNewsTitle));
  }

  async longPressFeaturedNewsTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.featuredNewsTitle));
  }

  async expectFeaturedNewsTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.featuredNewsTitle), value, timeoutMs);
  }

  async expectFeaturedNewsTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.featuredNewsTitle), timeoutMs);
  }

  async expectFeaturedNewsTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.featuredNewsTitle), timeoutMs);
  }

  async expectFeaturedNewsTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.featuredNewsTitle), timeoutMs);
  }

  async expectFeaturedNewsTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.featuredNewsTitle), count, timeoutMs);
  }

  async longPressSwitchToPreviousNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.switchToPreviousNews));
  }

  async expectSwitchToPreviousNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.switchToPreviousNews), value, timeoutMs);
  }

  async expectSwitchToPreviousNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.switchToPreviousNews), timeoutMs);
  }

  async expectSwitchToPreviousNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.switchToPreviousNews), timeoutMs);
  }

  async expectSwitchToPreviousNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.switchToPreviousNews), timeoutMs);
  }

  async expectSwitchToPreviousNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.switchToPreviousNews), count, timeoutMs);
  }

  async doubleClickAiMedia(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiMedia));
  }

  async longPressAiMedia(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiMedia));
  }

  async expectAiMediaValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.aiMedia), value, timeoutMs);
  }

  async expectAiMediaChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.aiMedia), timeoutMs);
  }

  async expectAiMediaUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.aiMedia), timeoutMs);
  }

  async expectAiMediaFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.aiMedia), timeoutMs);
  }

  async expectAiMediaCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.aiMedia), count, timeoutMs);
  }

  async clickAiTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiTitle));
  }

  async doubleClickAiTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiTitle));
  }

  async longPressAiTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiTitle));
  }

  async expectAiTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.aiTitle), value, timeoutMs);
  }

  async expectAiTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.aiTitle), timeoutMs);
  }

  async expectAiTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.aiTitle), timeoutMs);
  }

  async expectAiTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.aiTitle), timeoutMs);
  }

  async expectAiTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.aiTitle), timeoutMs);
  }

  async expectAiTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.aiTitle), timeoutMs);
  }

  async expectAiTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.aiTitle), count, timeoutMs);
  }

  async clickAiDrakeTiwary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiDrakeTiwary));
  }

  async doubleClickAiDrakeTiwary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiDrakeTiwary));
  }

  async longPressAiDrakeTiwary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiDrakeTiwary));
  }

  async expectAiDrakeTiwaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.aiDrakeTiwary), value, timeoutMs);
  }

  async expectAiDrakeTiwaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.aiDrakeTiwary), timeoutMs);
  }

  async expectAiDrakeTiwaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.aiDrakeTiwary), timeoutMs);
  }

  async expectAiDrakeTiwaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.aiDrakeTiwary), timeoutMs);
  }

  async expectAiDrakeTiwaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.aiDrakeTiwary), timeoutMs);
  }

  async expectAiDrakeTiwaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.aiDrakeTiwary), timeoutMs);
  }

  async expectAiDrakeTiwaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.aiDrakeTiwary), count, timeoutMs);
  }

  async longPressAiShareNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiShareNews));
  }

  async expectAiShareNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.aiShareNews), value, timeoutMs);
  }

  async expectAiShareNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.aiShareNews), timeoutMs);
  }

  async expectAiShareNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.aiShareNews), timeoutMs);
  }

  async expectAiShareNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.aiShareNews), timeoutMs);
  }

  async expectAiShareNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.aiShareNews), count, timeoutMs);
  }

  async longPressAiSaveNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiSaveNews));
  }

  async expectAiSaveNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.aiSaveNews), value, timeoutMs);
  }

  async expectAiSaveNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.aiSaveNews), timeoutMs);
  }

  async expectAiSaveNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.aiSaveNews), timeoutMs);
  }

  async expectAiSaveNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.aiSaveNews), timeoutMs);
  }

  async expectAiSaveNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.aiSaveNews), count, timeoutMs);
  }

  async doubleClickTakeTheNextStepInYourDev(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDev));
  }

  async longPressTakeTheNextStepInYourDev(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDev));
  }

  async expectTakeTheNextStepInYourDevValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDev), value, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDev), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDev), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDev), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDev), count, timeoutMs);
  }

  async clickTakeTheNextStepInYourDevStacyCutrono(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevStacyCutrono));
  }

  async doubleClickTakeTheNextStepInYourDevStacyCutrono(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevStacyCutrono));
  }

  async longPressTakeTheNextStepInYourDevStacyCutrono(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevStacyCutrono));
  }

  async expectTakeTheNextStepInYourDevStacyCutronoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevStacyCutrono), value, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevStacyCutrono), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevStacyCutrono), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevStacyCutrono), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevStacyCutrono), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevStacyCutrono), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevStacyCutrono), count, timeoutMs);
  }

  async longPressTakeTheNextStepInYourDevShareNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevShareNews));
  }

  async expectTakeTheNextStepInYourDevShareNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevShareNews), value, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevShareNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevShareNews), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevShareNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevShareNews), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevShareNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevShareNews), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevShareNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevShareNews), count, timeoutMs);
  }

  async longPressTakeTheNextStepInYourDevSaveNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevSaveNews));
  }

  async expectTakeTheNextStepInYourDevSaveNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevSaveNews), value, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevSaveNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevSaveNews), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevSaveNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevSaveNews), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevSaveNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevSaveNews), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevSaveNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevSaveNews), count, timeoutMs);
  }

  async doubleClickAllEmployeeTownHallJune(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJune));
  }

  async longPressAllEmployeeTownHallJune(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJune));
  }

  async expectAllEmployeeTownHallJuneValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJune), value, timeoutMs);
  }

  async expectAllEmployeeTownHallJuneChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJune), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJune), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJune), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJune), count, timeoutMs);
  }

  async clickAllEmployeeTownHallJuneAshleyAmerson(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneAshleyAmerson));
  }

  async doubleClickAllEmployeeTownHallJuneAshleyAmerson(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneAshleyAmerson));
  }

  async longPressAllEmployeeTownHallJuneAshleyAmerson(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneAshleyAmerson));
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneAshleyAmerson), value, timeoutMs);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneAshleyAmerson), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneAshleyAmerson), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneAshleyAmerson), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneAshleyAmerson), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneAshleyAmerson), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneAshleyAmerson), count, timeoutMs);
  }

  async longPressAllEmployeeTownHallJuneShareNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneShareNews));
  }

  async expectAllEmployeeTownHallJuneShareNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneShareNews), value, timeoutMs);
  }

  async expectAllEmployeeTownHallJuneShareNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneShareNews), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneShareNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneShareNews), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneShareNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneShareNews), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneShareNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneShareNews), count, timeoutMs);
  }

  async longPressAllEmployeeTownHallJuneSaveNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneSaveNews));
  }

  async expectAllEmployeeTownHallJuneSaveNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneSaveNews), value, timeoutMs);
  }

  async expectAllEmployeeTownHallJuneSaveNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneSaveNews), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneSaveNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneSaveNews), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneSaveNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneSaveNews), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneSaveNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.allEmployeeTownHallJuneSaveNews), count, timeoutMs);
  }

  async doubleClickCelebratingTheStrengthOfTh(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTh));
  }

  async longPressCelebratingTheStrengthOfTh(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTh));
  }

  async expectCelebratingTheStrengthOfThValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTh), value, timeoutMs);
  }

  async expectCelebratingTheStrengthOfThChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTh), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTh), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTh), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTh), count, timeoutMs);
  }

  async clickCelebratingTheStrengthOfTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTitle));
  }

  async doubleClickCelebratingTheStrengthOfTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTitle));
  }

  async longPressCelebratingTheStrengthOfTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTitle));
  }

  async expectCelebratingTheStrengthOfTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTitle), value, timeoutMs);
  }

  async expectCelebratingTheStrengthOfTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTitle), timeoutMs);
  }

  async expectCelebratingTheStrengthOfTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTitle), timeoutMs);
  }

  async expectCelebratingTheStrengthOfTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTitle), timeoutMs);
  }

  async expectCelebratingTheStrengthOfTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTitle), timeoutMs);
  }

  async expectCelebratingTheStrengthOfTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTitle), timeoutMs);
  }

  async expectCelebratingTheStrengthOfTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfTitle), count, timeoutMs);
  }

  async longPressCelebratingTheStrengthOfThShareNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThShareNews));
  }

  async expectCelebratingTheStrengthOfThShareNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThShareNews), value, timeoutMs);
  }

  async expectCelebratingTheStrengthOfThShareNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThShareNews), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThShareNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThShareNews), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThShareNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThShareNews), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThShareNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThShareNews), count, timeoutMs);
  }

  async longPressCelebratingTheStrengthOfThSaveNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThSaveNews));
  }

  async expectCelebratingTheStrengthOfThSaveNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThSaveNews), value, timeoutMs);
  }

  async expectCelebratingTheStrengthOfThSaveNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThSaveNews), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThSaveNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThSaveNews), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThSaveNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThSaveNews), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThSaveNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.celebratingTheStrengthOfThSaveNews), count, timeoutMs);
  }

  async longPressSwitchToNextNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.switchToNextNews));
  }

  async expectSwitchToNextNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.switchToNextNews), value, timeoutMs);
  }

  async expectSwitchToNextNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.switchToNextNews), timeoutMs);
  }

  async expectSwitchToNextNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.switchToNextNews), timeoutMs);
  }

  async expectSwitchToNextNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.switchToNextNews), timeoutMs);
  }

  async expectSwitchToNextNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.switchToNextNews), count, timeoutMs);
  }

  async longPressLatestNewsTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.latestNewsTitle));
  }

  async expectLatestNewsTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.latestNewsTitle), value, timeoutMs);
  }

  async expectLatestNewsTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.latestNewsTitle), timeoutMs);
  }

  async expectLatestNewsTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.latestNewsTitle), timeoutMs);
  }

  async expectLatestNewsTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.latestNewsTitle), timeoutMs);
  }

  async expectLatestNewsTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.latestNewsTitle), count, timeoutMs);
  }

  async doubleClickTheRoleOfHrInAShrinkingGtmMarketing(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingGtmMarketing));
  }

  async longPressTheRoleOfHrInAShrinkingGtmMarketing(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingGtmMarketing));
  }

  async expectTheRoleOfHrInAShrinkingGtmMarketingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingGtmMarketing), value, timeoutMs);
  }

  async expectTheRoleOfHrInAShrinkingGtmMarketingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingGtmMarketing), timeoutMs);
  }

  async expectTheRoleOfHrInAShrinkingGtmMarketingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingGtmMarketing), timeoutMs);
  }

  async expectTheRoleOfHrInAShrinkingGtmMarketingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingGtmMarketing), timeoutMs);
  }

  async expectTheRoleOfHrInAShrinkingGtmMarketingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingGtmMarketing), timeoutMs);
  }

  async expectTheRoleOfHrInAShrinkingGtmMarketingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingGtmMarketing), timeoutMs);
  }

  async expectTheRoleOfHrInAShrinkingGtmMarketingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingGtmMarketing), count, timeoutMs);
  }

  async longPressTheRoleOfHrInAShrinkingSaveNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingSaveNews));
  }

  async expectTheRoleOfHrInAShrinkingSaveNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingSaveNews), value, timeoutMs);
  }

  async expectTheRoleOfHrInAShrinkingSaveNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingSaveNews), timeoutMs);
  }

  async expectTheRoleOfHrInAShrinkingSaveNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingSaveNews), timeoutMs);
  }

  async expectTheRoleOfHrInAShrinkingSaveNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingSaveNews), timeoutMs);
  }

  async expectTheRoleOfHrInAShrinkingSaveNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingSaveNews), count, timeoutMs);
  }

  async doubleClickTheRoleOfHrLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrLink));
  }

  async longPressTheRoleOfHrLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrLink));
  }

  async expectTheRoleOfHrLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrLink), value, timeoutMs);
  }

  async expectTheRoleOfHrLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrLink), timeoutMs);
  }

  async expectTheRoleOfHrLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrLink), timeoutMs);
  }

  async expectTheRoleOfHrLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrLink), timeoutMs);
  }

  async expectTheRoleOfHrLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrLink), timeoutMs);
  }

  async expectTheRoleOfHrLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrLink), timeoutMs);
  }

  async expectTheRoleOfHrLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrLink), count, timeoutMs);
  }

  async doubleClickTheRoleOfHrInAShrinkingComment(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingComment));
  }

  async longPressTheRoleOfHrInAShrinkingComment(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingComment));
  }

  async expectTheRoleOfHrInAShrinkingCommentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingComment), value, timeoutMs);
  }

  async expectTheRoleOfHrInAShrinkingCommentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingComment), timeoutMs);
  }

  async expectTheRoleOfHrInAShrinkingCommentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingComment), timeoutMs);
  }

  async expectTheRoleOfHrInAShrinkingCommentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingComment), timeoutMs);
  }

  async expectTheRoleOfHrInAShrinkingCommentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingComment), count, timeoutMs);
  }

  async longPressTheRoleOfHrInAShrinkingShareNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingShareNews));
  }

  async expectTheRoleOfHrInAShrinkingShareNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingShareNews), value, timeoutMs);
  }

  async expectTheRoleOfHrInAShrinkingShareNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingShareNews), timeoutMs);
  }

  async expectTheRoleOfHrInAShrinkingShareNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingShareNews), timeoutMs);
  }

  async expectTheRoleOfHrInAShrinkingShareNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingShareNews), timeoutMs);
  }

  async expectTheRoleOfHrInAShrinkingShareNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.theRoleOfHrInAShrinkingShareNews), count, timeoutMs);
  }

  async doubleClickLatestNewsTitleRequestsOverview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.latestNewsTitleRequestsOverview));
  }

  async longPressLatestNewsTitleRequestsOverview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.latestNewsTitleRequestsOverview));
  }

  async expectLatestNewsTitleRequestsOverviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.latestNewsTitleRequestsOverview), value, timeoutMs);
  }

  async expectLatestNewsTitleRequestsOverviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.latestNewsTitleRequestsOverview), timeoutMs);
  }

  async expectLatestNewsTitleRequestsOverviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.latestNewsTitleRequestsOverview), timeoutMs);
  }

  async expectLatestNewsTitleRequestsOverviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.latestNewsTitleRequestsOverview), timeoutMs);
  }

  async expectLatestNewsTitleRequestsOverviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.latestNewsTitleRequestsOverview), count, timeoutMs);
  }

  async longPressMyRequests0(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.myRequests0));
  }

  async expectMyRequests0Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.myRequests0), value, timeoutMs);
  }

  async expectMyRequests0Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.myRequests0), timeoutMs);
  }

  async expectMyRequests0Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.myRequests0), timeoutMs);
  }

  async expectMyRequests0Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.myRequests0), timeoutMs);
  }

  async expectMyRequests0Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.myRequests0), count, timeoutMs);
  }

  async doubleClickAssignedTrainingTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.assignedTrainingTitle));
  }

  async longPressAssignedTrainingTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.assignedTrainingTitle));
  }

  async expectAssignedTrainingTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.assignedTrainingTitle), value, timeoutMs);
  }

  async expectAssignedTrainingTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.assignedTrainingTitle), timeoutMs);
  }

  async expectAssignedTrainingTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.assignedTrainingTitle), timeoutMs);
  }

  async expectAssignedTrainingTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.assignedTrainingTitle), timeoutMs);
  }

  async expectAssignedTrainingTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.assignedTrainingTitle), count, timeoutMs);
  }

  async doubleClickTasks(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.tasks));
  }

  async longPressTasks(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.tasks));
  }

  async expectTasksValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.tasks), value, timeoutMs);
  }

  async expectTasksChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.tasks), timeoutMs);
  }

  async expectTasksUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.tasks), timeoutMs);
  }

  async expectTasksFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.tasks), timeoutMs);
  }

  async expectTasksCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.tasks), count, timeoutMs);
  }

  async expectAddATaskText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UkgcommonsPage.L.addATask), expected, timeoutMs);
  }

  async expectAddATaskContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UkgcommonsPage.L.addATask), substring, timeoutMs);
  }

  async expectAddATaskChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.addATask), timeoutMs);
  }

  async expectAddATaskUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.addATask), timeoutMs);
  }

  async expectAddATaskCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.addATask), count, timeoutMs);
  }

  async doubleClickHotJobs(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.hotJobs));
  }

  async longPressHotJobs(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.hotJobs));
  }

  async expectHotJobsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.hotJobs), value, timeoutMs);
  }

  async expectHotJobsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.hotJobs), timeoutMs);
  }

  async expectHotJobsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.hotJobs), timeoutMs);
  }

  async expectHotJobsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.hotJobs), timeoutMs);
  }

  async expectHotJobsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.hotJobs), count, timeoutMs);
  }

  async doubleClickHotJobsTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.hotJobsTitle));
  }

  async longPressHotJobsTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.hotJobsTitle));
  }

  async expectHotJobsTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.hotJobsTitle), value, timeoutMs);
  }

  async expectHotJobsTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.hotJobsTitle), timeoutMs);
  }

  async expectHotJobsTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.hotJobsTitle), timeoutMs);
  }

  async expectHotJobsTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.hotJobsTitle), timeoutMs);
  }

  async expectHotJobsTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.hotJobsTitle), count, timeoutMs);
  }

  async doubleClickHotJobsAreFeatured(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.hotJobsAreFeatured));
  }

  async longPressHotJobsAreFeatured(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.hotJobsAreFeatured));
  }

  async expectHotJobsAreFeaturedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.hotJobsAreFeatured), value, timeoutMs);
  }

  async expectHotJobsAreFeaturedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.hotJobsAreFeatured), timeoutMs);
  }

  async expectHotJobsAreFeaturedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.hotJobsAreFeatured), timeoutMs);
  }

  async expectHotJobsAreFeaturedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.hotJobsAreFeatured), timeoutMs);
  }

  async expectHotJobsAreFeaturedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.hotJobsAreFeatured), count, timeoutMs);
  }

  async clickJagadeeshMUkgCom(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.jagadeeshMUkgCom));
  }

  async doubleClickJagadeeshMUkgCom(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.jagadeeshMUkgCom));
  }

  async longPressJagadeeshMUkgCom(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.jagadeeshMUkgCom));
  }

  async expectJagadeeshMUkgComValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.jagadeeshMUkgCom), value, timeoutMs);
  }

  async expectJagadeeshMUkgComEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.jagadeeshMUkgCom), timeoutMs);
  }

  async expectJagadeeshMUkgComDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.jagadeeshMUkgCom), timeoutMs);
  }

  async expectJagadeeshMUkgComChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.jagadeeshMUkgCom), timeoutMs);
  }

  async expectJagadeeshMUkgComUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.jagadeeshMUkgCom), timeoutMs);
  }

  async expectJagadeeshMUkgComFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.jagadeeshMUkgCom), timeoutMs);
  }

  async expectJagadeeshMUkgComCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.jagadeeshMUkgCom), count, timeoutMs);
  }

  async doubleClickViewAccount(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewAccount));
  }

  async longPressViewAccount(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewAccount));
  }

  async expectViewAccountValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.viewAccount), value, timeoutMs);
  }

  async expectViewAccountChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.viewAccount), timeoutMs);
  }

  async expectViewAccountUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.viewAccount), timeoutMs);
  }

  async expectViewAccountFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.viewAccount), timeoutMs);
  }

  async expectViewAccountCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.viewAccount), count, timeoutMs);
  }

  async doubleClickMySavedNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.mySavedNews));
  }

  async longPressMySavedNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.mySavedNews));
  }

  async expectMySavedNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.mySavedNews), value, timeoutMs);
  }

  async expectMySavedNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.mySavedNews), count, timeoutMs);
  }

  async doubleClickCustomizeHomePageLayout(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.customizeHomePageLayout));
  }

  async longPressCustomizeHomePageLayout(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.customizeHomePageLayout));
  }

  async expectCustomizeHomePageLayoutValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.customizeHomePageLayout), value, timeoutMs);
  }

  async expectCustomizeHomePageLayoutChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.customizeHomePageLayout), timeoutMs);
  }

  async expectCustomizeHomePageLayoutUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.customizeHomePageLayout), timeoutMs);
  }

  async expectCustomizeHomePageLayoutFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.customizeHomePageLayout), timeoutMs);
  }

  async expectCustomizeHomePageLayoutCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.customizeHomePageLayout), count, timeoutMs);
  }

  async longPressAiUnsaveNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.aiUnsaveNews));
  }

  async expectAiUnsaveNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.aiUnsaveNews), value, timeoutMs);
  }

  async expectAiUnsaveNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.aiUnsaveNews), timeoutMs);
  }

  async expectAiUnsaveNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.aiUnsaveNews), timeoutMs);
  }

  async expectAiUnsaveNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.aiUnsaveNews), timeoutMs);
  }

  async expectAiUnsaveNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.aiUnsaveNews), count, timeoutMs);
  }

  async clickNewsSavedSuccessfully(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UkgcommonsPage.L.newsSavedSuccessfully));
  }

  async doubleClickNewsSavedSuccessfully(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.newsSavedSuccessfully));
  }

  async longPressNewsSavedSuccessfully(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.newsSavedSuccessfully));
  }

  async expectNewsSavedSuccessfullyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.newsSavedSuccessfully), value, timeoutMs);
  }

  async expectNewsSavedSuccessfullyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.newsSavedSuccessfully), timeoutMs);
  }

  async expectNewsSavedSuccessfullyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.newsSavedSuccessfully), timeoutMs);
  }

  async expectNewsSavedSuccessfullyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.newsSavedSuccessfully), timeoutMs);
  }

  async expectNewsSavedSuccessfullyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.newsSavedSuccessfully), timeoutMs);
  }

  async expectNewsSavedSuccessfullyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.newsSavedSuccessfully), timeoutMs);
  }

  async expectNewsSavedSuccessfullyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.newsSavedSuccessfully), count, timeoutMs);
  }

  async doubleClickViewSavedNewsUnder(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewSavedNewsUnder));
  }

  async longPressViewSavedNewsUnder(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.viewSavedNewsUnder));
  }

  async expectViewSavedNewsUnderValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.viewSavedNewsUnder), value, timeoutMs);
  }

  async expectViewSavedNewsUnderEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UkgcommonsPage.L.viewSavedNewsUnder), timeoutMs);
  }

  async expectViewSavedNewsUnderDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UkgcommonsPage.L.viewSavedNewsUnder), timeoutMs);
  }

  async expectViewSavedNewsUnderChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.viewSavedNewsUnder), timeoutMs);
  }

  async expectViewSavedNewsUnderUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.viewSavedNewsUnder), timeoutMs);
  }

  async expectViewSavedNewsUnderFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.viewSavedNewsUnder), timeoutMs);
  }

  async expectViewSavedNewsUnderCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.viewSavedNewsUnder), count, timeoutMs);
  }

  async longPressTakeTheNextStepInYourDevUnsaveNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevUnsaveNews));
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevUnsaveNews), value, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevUnsaveNews), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevUnsaveNews), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevUnsaveNews), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UkgcommonsPage.L.takeTheNextStepInYourDevUnsaveNews), count, timeoutMs);
  }

}
