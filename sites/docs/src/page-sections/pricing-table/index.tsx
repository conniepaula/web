'use client';

import { useState } from 'react';

import { cn } from 'xy-ui';
import PeriodSwitch from './period-switch';
import CurrencySwitch from './currency-switch';
import Plans from './plans';
import { Currency, BillingPeriod } from './types';

export default function PricingTable({ className }: { className?: string }) {
  const [period, setPeriod] = useState<BillingPeriod>(BillingPeriod.MONTHLY);
  const [currency, setCurrency] = useState<Currency>(getDefaultCurrency());

  return (
    <div>
      <div className={cn('flex justify-center relative mb-8', className)}>
        <PeriodSwitch period={period} onClick={setPeriod} />
        <CurrencySwitch value={currency} onChange={setCurrency} />
      </div>

      <Plans currency={currency} period={period} />
    </div>
  );
}

function getDefaultCurrency(): Currency {
  let isEurope = false;

  try {
    isEurope = Intl.DateTimeFormat()
      .resolvedOptions()
      .timeZone.toLowerCase()
      .includes('europe');
  } catch (err) {
    console.log(err);
  }

  return isEurope ? Currency.EUR : Currency.USD;
}