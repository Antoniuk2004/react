import {signal} from "@preact/signals-react";
import {SlideDirection} from "./SlideDirection.ts";

export const useTransitionSignal = signal(SlideDirection.None);