import { __ } from '@wordpress/i18n';
import { 
    useBlockProps,
    BlockControls,
    InspectorControls,
    AlignmentToolbar 
} from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import './editor.scss';
import { Placeholder, TextControl, SelectControl } from '@wordpress/components';
 
export default function Edit( { attributes, isSelected, setAttributes } ) {
    return ([
        <InspectorControls>
            <PanelBody title={"Gluten Source"}>
                <SelectControl
                    label="Select your gluten source"
                    value={ attributes.glutenSource }
                    options={ [
                        { label: 'Bread', value: 'bread' },
                        { label: 'Pasta', value: 'pasta' },
                        { label: 'Beer', value: 'beer' },
                    ] }
                    onChange={ ( val ) => setAttributes({glutenSource: val}) }
                />
            </PanelBody>
        </InspectorControls>,
        <div { ...useBlockProps({className: attributes.glutenSource}) } style={{textAlign: attributes.alignment }} >

            {  attributes.message && ! isSelected ? (
                <div>{ attributes.message }</div>
            ) : (
                    <TextControl
                        value={ attributes.message }
                        onChange={ ( val ) =>
                            setAttributes( { message: val } )
                        }
                    />
            ) }
            <BlockControls>
                <AlignmentToolbar
                    value={ attributes.alignment }
                    onChange={ ( val ) => setAttributes( { alignment: val }) }
                />
            </BlockControls>
</div>
    ]);
}