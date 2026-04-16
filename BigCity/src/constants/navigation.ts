export type NavigationItem = {
  labelKey: string;
  to: string;
};

export const primaryNavigation: NavigationItem[] = [
  { labelKey: "nav.home", to: "/" },
  { labelKey: "nav.listings", to: "/listings" },
  { labelKey: "nav.about", to: "/about" },
  { labelKey: "nav.contact", to: "/contact" },
];

export const footerExploreLinks: NavigationItem[] = [
  { labelKey: "footer.exploreLinks.listings", to: "/listings" },
  { labelKey: "footer.exploreLinks.about", to: "/about" },
  { labelKey: "footer.exploreLinks.contact", to: "/contact" },
];

export const footerSupportLinks: NavigationItem[] = [
  { labelKey: "footer.supportLinks.contact", to: "/contact" },
  { labelKey: "footer.supportLinks.browseListings", to: "/listings" },
  { labelKey: "footer.supportLinks.aboutBigCity", to: "/about" },
];
