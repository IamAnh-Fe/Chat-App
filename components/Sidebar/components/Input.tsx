import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 12px;
      padding: 0 16px;

  padding-bottom: 24px;
`;
const Box = styled.div`
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
`;
const Label = styled.label`
display: flex;
position: relative;
width: 100%;
align-items: stretch;
min-height: 36px;
background-color: #f0f2f5;
border-radius: 50px;
`;
const Span = styled.span`
  pointer-events: none;
  white-space: nowrap;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
const Svg = styled.svg`
  height: 16px;
  display: block;
  width: 16px;
  transition-timing-function: cubic-bezier(0.08, 0.52, 0.52, 1);
  transition-duration: 200ms;
`;
const SInput = styled.input`
  flex-shrink: 1;
  padding-bottom: 9px;
  flex-basis: auto;
  height: 36px;
  font-size: 0.9375rem;
  position: relative;
  flex-grow: 1;
  min-width: 0;
  padding-right: 6px;
  padding-top: 7px;
  -webkit-appearance: none;
  transition-duration: 100ms;
  touch-action: manipulation;
  outline: none;
  transition-property: margin-right, opacity, transform;
  transition-timing-function: linear;
  -webkit-tap-highlight-color: transparent;
  border: 0;
  background-color: transparent;
`;
export const Input = () => {
  return (
    <Container>
      <Box>
        <Content>
          <Label>
            <Span>
              <Svg fill="currentColor" viewBox="0 0 16 16">
                <g fill-rule="evenodd" transform="translate(-448 -544)">
                  <g fill-rule="nonzero">
                    <path
                      d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z"
                      transform="translate(448 544)"
                    ></path>
                    <path
                      d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z"
                      transform="translate(448 544)"
                    ></path>
                    <path
                      d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z"
                      transform="translate(448 544)"
                    ></path>
                    <path
                      d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z"
                      transform="translate(448 544)"
                    ></path>
                  </g>
                </g>
              </Svg>
            </Span>
            <SInput
              placeholder="Tìm kiếm trên Messenger"
              dir="ltr"
              aria-autocomplete="list"
              aria-label="Tìm kiếm trên Messenger"
              aria-expanded="false"
              aria-invalid="false"
            ></SInput>
          </Label>
        </Content>
      </Box>
    </Container>
  );
};
