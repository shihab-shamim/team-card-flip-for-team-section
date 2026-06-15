import { useState } from "react";
import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  PanelRow,
  RangeControl,
  SelectControl,
  __experimentalUnitControl as UnitControl
} from "@wordpress/components";
import { Background, BoxControl, ColorsControl, Device, Label } from "../../../../../../bpl-tools/Components";
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
            initialOpen={true}>
              
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
    </>
  );
};

export default Style;
