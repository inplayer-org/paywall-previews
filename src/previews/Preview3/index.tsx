import React from 'react';
import { InPlayerIcon, Colors } from '@inplayer-org/inplayer-ui';

// Images
import previewImg from 'assets/ip-preview-premium.png';

// Types
import { Branding } from '../../types/branding';

// Components
import TextEditor from '../../components/TextEditor';
import { PaywallExplain } from '../../components/SharedComponents';
import {
    StyledPreviewBox,
    TitleWrapper,
    StyledImageHolder,
    PaywallExplainSpan,
    StyledTextWrapper,
    Header,
    StyledIcon,
    TitleBorder
} from './styled';

interface OwnProps {
  branding?: Branding;
  showInPreview?: boolean;
  width?: string;
  height?: string;
  theme?: any;
}

const Preview3 = ({
  branding: {
    paywall_cover_photo: imageUrl = previewImg,
    preview_title: previewTitle = `<h1><strong>Asset title</strong></h1>`,
    preview_description: previewDescription = `<p>Asset description</p>`,
    preview_buttons_bg_color: buttonBgColor = Colors.green,
  } = {},
  showInPreview = true,
  width,
  height,
}: OwnProps) => {
  return (
    <StyledPreviewBox minWidth="450px" color={buttonBgColor} width={width} height={height}>
      <StyledImageHolder backgroundImage={imageUrl}>
        <Header color={Colors.fontLightGray}>Already have access? Login with your InPlayer account</Header>
        <StyledTextWrapper showInPreview={showInPreview}>
          <PaywallExplain color={buttonBgColor}>
            <PaywallExplainSpan>
              <InPlayerIcon name="diamond" /> PREMIUM CONTENT
            </PaywallExplainSpan>
          </PaywallExplain>
          <TitleWrapper>
            <TitleBorder color={buttonBgColor}>
              <TextEditor value={previewTitle} displayToolbar={false} textColor={Colors.white} readOnly />
            </TitleBorder>
            <StyledIcon name="play" color={buttonBgColor} />
          </TitleWrapper>
          <TextEditor value={previewDescription} displayToolbar={false} textColor={Colors.white} readOnly />
        </StyledTextWrapper>
      </StyledImageHolder>
    </StyledPreviewBox>
  );
};

export default Preview3;
