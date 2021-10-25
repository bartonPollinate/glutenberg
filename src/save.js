import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
 
export default function save( { attributes } ) {
    return <div style={{textAlign: attributes.alignment }} { ...useBlockProps.save({className: attributes.glutenSource}) }>{ attributes.message }</div>;
}