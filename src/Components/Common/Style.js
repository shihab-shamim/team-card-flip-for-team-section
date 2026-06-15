import { mobileBreakpoint, tabBreakpoint } from '../../../../bpl-tools/utils/data';
import { getBackgroundCSS, getBoxCSS, getColorsCSS } from '../../../../bpl-tools/utils/getCSS';

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

	return <style dangerouslySetInnerHTML={{
		__html: `





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