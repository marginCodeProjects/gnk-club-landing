import React from 'react';
import {MainSection} from "@/components/sections/MainSection";
import {HeroSection} from "@/components/sections/HeroSection";
import {BottomSection} from "@/components/sections/BottomSection";

const HomePage = () => {
    return (
        <main className="overflow-hidden">
          <HeroSection />
          <MainSection />
          <BottomSection />
        </main>
    );
};

export default HomePage;