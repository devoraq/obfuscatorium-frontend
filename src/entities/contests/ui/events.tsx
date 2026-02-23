"use client";

import React from 'react';
import { useAppDispatch, useAppSelector } from "@/store/hooks";

const Events = () => {
    const events = useAppSelector((state) => state.contest);
  return (
    <div>events</div>
  )
}

export default Events;