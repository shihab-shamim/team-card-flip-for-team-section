


export const OneCard = ({attributes, setAttributes}) => {
  const {profiles = []} = attributes || {};
  return (
    <section className="tcf_cards_section">
      <div className="tcf_cards_container">
        <div className="tcf_cards_grid">

          {profiles.map((profile, index) => (
            <div className="tcf_cards_item" key={index}>
              <div className="tcf_cards_thumbnail">
                <img src={profile.image} alt={profile.name} />
                <div className="tcf_cards_social_overlay">
                  <ul className="tcf_cards_social_list">
                    {(profile.social || []).map((item, sIndex) => (
                      <li className="tcf_cards_social_item" key={sIndex}>
                        <a href={item.link} className="tcf_cards_social_link" dangerouslySetInnerHTML={{ __html: item.icon }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="tcf_cards_info">
                <h4 className="tcf_cards_name">{profile.name}</h4>
                <h5 className="tcf_cards_designation">{profile.designation}</h5>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
