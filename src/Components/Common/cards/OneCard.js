


export const OneCard = ({attributes, setAttributes}) => {
  const {profiles = [], options={showName:true,showDesignation:true,showSocial:true,openInNewTab:true}} = attributes || {};
  return (
    <section className="tcf_cards_section">
      <div className="tcf_cards_container">
        <div className="tcf_cards_grid">

          {profiles.map((profile, index) => (
            <div className="tcf_cards_item" key={index}>
              <div className="tcf_cards_thumbnail">
                <img src={profile.image} alt={profile.name} />
                {options.showSocial && (
                <div className="tcf_cards_social_overlay">
                  <ul className="tcf_cards_social_list">
                    {(profile.social || []).map((item, sIndex) => (
                      <li className="tcf_cards_social_item" key={sIndex}>
                        <a href={item.link} target={options.openInNewTab ? "_blank" : "_self"} rel={options.openInNewTab ? "noopener noreferrer" : ""}  className="tcf_cards_social_link" dangerouslySetInnerHTML={{ __html: item.icon }} />
                      </li>
                    ))}
                  </ul>
                </div>)}
              </div>
              <div className="tcf_cards_info">
                {options.showName && <h4 className="tcf_cards_name">{profile.name}</h4>}
                {options.showDesignation && <h5 className="tcf_cards_designation">{profile.designation}</h5>}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
