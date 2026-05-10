import type { Metadata } from "next";
import type { JSX } from "react";

import { Brief } from "@/features/home";
import AnimationWrapper from "@/shared/animation/AnimationWrapper";

import Grid from "@/shared/ui/Grid";

export const metadata: Metadata = {
  title: "Home | Ebram Barsoum",
};

export default function HomePage(): JSX.Element {

  return (
    <AnimationWrapper animatedClass="slide-up" className="flex-1 flex">
      <Grid className="flex-1 p-4 content-center md:px-10 lg:px-30">
        <Brief />
      </Grid>
    </AnimationWrapper>
  );
}
