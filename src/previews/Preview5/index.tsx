import React from 'react';
import { Colors } from '@inplayer-org/inplayer-ui';
import { lighten } from 'polished';

// Images
import previewImg from 'assets/ip-preview-premium.png';

// Types
import { Branding } from '../../types/branding';

// Components
import TextEditor from '../../components/TextEditor';
import { PaywallExplain } from '../../components/SharedComponents';
import {
  StyledPreviewBox,
  ImageWrapper,
  Overlay,
  BuyButtonHolder,
  BuyButtonBorder,
  BuyButton,
  ItemDetails,
  StyledIcon,
  PaywallExplainSpan,
  TitleHolder,
  DescriptionHolder,
} from './styled';

interface OwnProps {
  branding?: Branding;
  width?: string;
  height?: string;
  theme?: any;
}

const Preview5 = ({
  branding: {
    paywall_cover_photo: imageUrl = previewImg,
    preview_title: previewTitle = `<h1><strong>Asset title</strong></h1>`,
    preview_description: previewDescription = `<p>Asset description</p>`,
    preview_button_label: previewButtonLabel = 'Buy',
    preview_buttons_bg_color: buttonBgColor = lighten(0.01, Colors.green),
    preview_buttons_text_color: buttonTextColor = Colors.black,
  } = {},
  width,
  height,
}: OwnProps) => {
  const heightNumber = Number(height?.slice(0, -1));
  return (
    <StyledPreviewBox minHeight="420px" width={width} height={height}>
      <ImageWrapper height={heightNumber} backgroundImage={imageUrl}>
        <Overlay />
        <BuyButtonHolder>
          <BuyButtonBorder>
            <BuyButton buttonBgColor={buttonBgColor} buttonTextColor={buttonTextColor}>
              {previewButtonLabel}
            </BuyButton>
          </BuyButtonBorder>
        </BuyButtonHolder>
      </ImageWrapper>
      <ItemDetails height={heightNumber}>
        <PaywallExplain color={lighten(0.01, buttonBgColor)}>
          <StyledIcon name="diamond" />
          <PaywallExplainSpan>Premium content</PaywallExplainSpan>
        </PaywallExplain>
        <TitleHolder>
          <TextEditor value={previewTitle} displayToolbar={false} readOnly />
        </TitleHolder>
        <DescriptionHolder>
          <TextEditor value={previewDescription} displayToolbar={false} readOnly />
        </DescriptionHolder>
      </ItemDetails>
    </StyledPreviewBox>
  );
};

export default Preview5;