import { mobileBreakpoint, tabBreakpoint } from '../../../../bpl-tools/utils/data';
import { getBackgroundCSS, getBoxCSS, getTypoCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	const { styles={} } = attributes || {};

	const mainSl = `#${id}`;
	const cardsSectionSl = `${mainSl} .tcf_cards_section`;
	const cardContainerSl = `${cardsSectionSl} .tcf_cards_container`; 
	const cardsGridSl = `${cardContainerSl} .tcf_cards_grid`; 
	const cardsCardSl = `${cardsGridSl} .tcf_cards_item`; 
	const cardsImageSl = `${cardsCardSl} .tcf_cards_thumbnail_img`; 
	const cardSocialSl = `${cardsCardSl} .tcf_cards_social_list`; 
	const cardSocialLinkSl = `${cardSocialSl} .tcf_cards_social_link`; 
	const cardSocialOverlaySl = `${cardsCardSl} .tcf_cards_social_overlay`; 
	const cardsInfoSl = `${cardsCardSl} .tcf_cards_info`; 
	const cardsNameSl = `${cardsInfoSl} .tcf_cards_name`; 
	const cardsDesignationSl = `${cardsInfoSl} .tcf_cards_designation`; 

	return <style dangerouslySetInnerHTML={{
		__html: `

		 ${getTypoCSS("", styles?.teamProfile?.name?.typo)?.googleFontLink}
		 ${getTypoCSS("", styles?.teamProfile?.designation?.typo)?.googleFontLink}


		 ${getTypoCSS(cardsNameSl, styles?.teamProfile?.name?.typo)?.styles}
		 ${getTypoCSS(cardsDesignationSl, styles?.teamProfile?.designation?.typo)?.styles}






		${cardContainerSl}{
		${getBackgroundCSS(styles?.bg)}
		padding:${getBoxCSS(styles?.padding?.desktop)};
		margin:${getBoxCSS(styles?.margin?.desktop)};
		border-radius:${getBoxCSS(styles?.radius)};

		
		}
		
		
		${cardsGridSl}{
		  grid-template-columns: repeat(${styles?.columns?.desktop},1fr);
		 column-gap: ${styles?.columnGap || 15}px;
		 row-gap: ${styles?.rowGap || 15}px;

		}


		${cardsImageSl}{
			width: ${styles?.image?.width};
			height: ${styles?.image?.height};
			object-fit: ${styles?.image?.imageFit};
		}

		${cardsCardSl}:hover img {
                        transform: scale(${styles?.image?.hoverScal});
                    }


					${cardSocialSl}{
					gap: ${styles?.icon?.gap}px;					
					}

					${cardSocialLinkSl}{
					color:${styles?.icon?.color};
					border: ${styles?.icon?.border?.width} ${styles?.icon?.border?.style} ${styles?.icon?.border?.color};
					width: ${styles?.icon?.width};
					height: ${styles?.icon?.height};
					svg{
					width: ${styles?.icon?.size}px;
					height: ${styles?.icon?.size}px;
					
					}
					}

					 ${cardSocialLinkSl}:hover {
                                    background-color: ${styles?.icon?.hoverBackgroundColor};
                                    color: ${styles?.icon?.hoverColor};

									svg{
									 color:${styles?.icon?.hoverColor};
									 fill:${styles?.icon?.hoverColor};
									}
                                }
					${cardSocialOverlaySl}{
					background-color: ${styles?.icon?.overlayColor};
					}

					${cardsCardSl}{
						${getBackgroundCSS(styles?.teamProfile?.bg)}
					}

					${cardsInfoSl}{
					padding:${getBoxCSS(styles?.teamProfile?.padding)};
					color: ${styles?.teamProfile?.color};
					text-align:${styles?.teamProfile?.textAlign};
					}

					${cardsNameSl}{
					margin:${getBoxCSS(styles?.teamProfile?.name?.margin)};
					}

					${cardsDesignationSl}{
					margin:${getBoxCSS(styles?.teamProfile?.designation?.margin)};
					}



		${tabBreakpoint}{
			${cardsGridSl}{
		  grid-template-columns: repeat(${styles?.columns?.tablet},1fr);
	

		}
		  	${cardContainerSl}{
		padding:${getBoxCSS(styles?.padding?.tablet)};
		margin:${getBoxCSS(styles?.margin?.tablet)};

		
		}
		
		}

			${mobileBreakpoint}{
			${cardsGridSl}{
		  grid-template-columns: repeat(${styles?.columns?.mobile},1fr);
	

		}

			  	${cardContainerSl}{
		padding:${getBoxCSS(styles?.padding?.mobile)};
		margin:${getBoxCSS(styles?.margin?.mobile)};

		
		}
		
		}

	`}} />;
}
export default Style;