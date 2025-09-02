'use client';
import SvgBottomLeft from './corner-svgs/BottomLeft';
import SvgBottomRight from './corner-svgs/BottomRight';
import SvgTopLeft from './corner-svgs/TopLeft';
import SvgTopRight from './corner-svgs/TopRight';

const CornerElements = () => {
  return (
    <>
      <SvgTopLeft />
      <SvgTopRight />
      <SvgBottomLeft />
      <SvgBottomRight />
    </>
  );
};

export default CornerElements;
