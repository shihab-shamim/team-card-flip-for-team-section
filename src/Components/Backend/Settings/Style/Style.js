import { useState } from "react";
import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  PanelRow,
  RangeControl,
  SelectControl,
  __experimentalUnitControl as UnitControl,BorderControl
} from "@wordpress/components";
import { Background, BoxControl, ColorControl, ColorsControl, Device, Label } from "../../../../../../bpl-tools/Components";
import { updateData } from "../../../../utils/functions";

const Style = ({ attributes, setAttributes,device }) => {
  const { styles={} } = attributes;



  return (
    <>
      <PanelBody
          
            className="bPlPanelBody"
            title={__("Container", "team-section")}
            initialOpen={false}
          >
            <Background label={__("Background", "team-section")} value={styles?.bg} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"bg")})}  />

              <PanelRow><Label>Padding</Label><Device/></PanelRow>
            
            <BoxControl  values={styles?.padding[device]} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"padding",device)})}/>

                <PanelRow><Label>Margin</Label><Device/></PanelRow>
            
            <BoxControl  values={styles?.margin[device]} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"margin",device)})}/>
            
            <BoxControl  className='mt15' label="Radius"  values={styles?.radius} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"radius")})}/>

          

          </PanelBody>

          <PanelBody  className="bPlPanelBody"
            title={__("Image", "team-section")}
            initialOpen={false}>
              
              <UnitControl className='mt15' label="Width" value={styles?.image?.width} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"image","width")})}/>
              <UnitControl className='mt15' label="Height" value={styles?.image?.height} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"image","height")})}/>
                <SelectControl  className="mt15"
                  label={__("Image Fit", "team-section")}
                  value={styles?.image?.imageFit}
                  options={[
                    { value: "cover", label: "Cover" },
                    { value: "contain", label: "Contain" },
                    { value: "fill", label: "Fill" },
                    { value: "scale-down", label: "Scale Down" },
                    { value: "none", label: "None" }
                  ]}
                  onChange={(v)=> setAttributes({ styles: updateData(styles,v,"image","imageFit")})}/>

                  <RangeControl min={1} step={0.1} max={2} className='mt15' label="Hover Scale" value={styles?.image?.hoverScal} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"image","hoverScal")})}/>
              

          </PanelBody>

          <PanelBody className="bPlPanelBody"
            title={__("Icons", "team-section")}
            initialOpen={false}>

              <ColorControl label="Overlay Color" value={styles?.icon?.overlayColor} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"icon","overlayColor")})} />
 
              <ColorControl label="Color" value={styles?.icon?.color} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"icon","color")})} />
                 <ColorControl label="Hover Color" value={styles?.icon?.hoverColor} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"icon","hoverColor")})} />
                 <ColorControl label="Hover Background" value={styles?.icon?.hoverBackgroundColor} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"icon","hoverBackgroundColor")})} />
                 <UnitControl className='mt15' label="Width" value={styles?.icon?.width} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"icon","width")})}/>
                 <UnitControl className='mt15' label="Height" value={styles?.icon?.height} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"icon","height")})}/>
                  <RangeControl className='mt15' label="Icon Gap" value={styles?.icon?.gap} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"icon","gap")})} />

                     <RangeControl className='mt15' label="Icon Size" value={styles?.icon?.size} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"icon","size")})} />

                      <BorderControl label="Border" className='mt15' value={styles?.icon?.border} onChange={(v)=> setAttributes({ styles: updateData(styles,v,"icon","border")})} />

          </PanelBody>
    </>
  );
};

export default Style;
