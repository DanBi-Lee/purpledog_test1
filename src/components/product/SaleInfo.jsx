import React from 'react';
import { addPriceComma } from '../../util/addPriceComma';

function SaleInfo ({inherited_styles, timeSalePrice, timeSaleDiscountPercent, salesPrice}) {
  return (
      <>
            <p className={inherited_styles?.price}>
                    {addPriceComma(timeSalePrice)}원
            </p>
            <p>
                <span className={inherited_styles?.price__discount}>
                    {timeSaleDiscountPercent}%
                </span>
                <del className={inherited_styles?.price__original}>
                    {addPriceComma(salesPrice)}원
                </del>
            </p>
      </>
  );
}

export default SaleInfo;