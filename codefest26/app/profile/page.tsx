'use client';

import ProfileCard from '@/components/ProfileCard';

import akshatImg from '@/public/images/akshat_core.png';
import adithyaImg from '@/public/images/adithya_core.png';
import soumyajitImg from '@/public/images/soumyajit_core.png';
import niaImg from '@/public/images/nia_core.png';
import ritayushImg from '@/public/images/ritayush_core.png';
import aryanImg from '@/public/images/aryan_tech.png';
import maanImg from '@/public/images/maan_tech.png';
import sreshtImg from '@/public/images/sresht_tech.png';
import pratyushImg from '@/public/images/pratyush_tech.png';
import subanImg from '@/public/images/suban_finance.png';
import ryanImg from '@/public/images/ryan_finance.png';
import anainahImg from '@/public/images/anainah_logistics.png';
import aryanvImg from '@/public/images/aryan_logistics.png';
import iniyaImg from '@/public/images/iniya_logistics.png';
import kennethImg from '@/public/images/kenneth_logistics.png';
import priyankaImg from '@/public/images/priyanka_logistics.png';
import siyaImg from '@/public/images/siya_logistics.png';
import iconPattern from '@/public/images/iconpattern.png';
import grainImg from '@/public/images/grain.webp';
import { a } from 'motion/react-client';

export default function ProfilePage() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      minHeight: '100vh', 
      backgroundColor: 'transparent',
      padding: '0rem',
      gap: '1.5rem',
      paddingTop: '2rem',
      paddingBottom: '2rem'
    }}>
      {/* Row 1: Core Team */}
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
        <ProfileCard
                name="Akshat Shanker Gupta"
                title="Core Team"
                handle="akshat"
                status="Online"
                contactText="Contact Me"
                avatarUrl={akshatImg.src}
                iconUrl={iconPattern.src}
                grainUrl={grainImg.src}
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
                behindGlowEnabled={true}
                behindGlowColor="hsla(347, 100%, 70%, 0.6)"
                innerGradient="linear-gradient(145deg,hsla(347, 40%, 45%, 0.55) 0%,hsla(203, 60%, 70%, 0.27) 100%)" 
                behindGlowSize={undefined} 
                miniAvatarUrl={undefined}
        />
        <ProfileCard
                name="Adithya Bangolae"
                title="Core Team"
                handle="adithya"
                status="Online"
                contactText="Contact Me"
                avatarUrl={adithyaImg.src}
                iconUrl={iconPattern.src}
                grainUrl={grainImg.src}
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
                behindGlowEnabled={true}
                behindGlowColor="hsla(347, 100%, 70%, 0.6)"
                innerGradient="linear-gradient(145deg,hsla(347, 40%, 45%, 0.55) 0%,hsla(203, 60%, 70%, 0.27) 100%)" 
                behindGlowSize={undefined} 
                miniAvatarUrl={undefined}
        />
        <ProfileCard
                name="Soumyajit Sur Roy"
                title="Core Team"
                handle="soumyajit"
                status="Online"
                contactText="Contact Me"
                avatarUrl={soumyajitImg.src}
                iconUrl={iconPattern.src}
                grainUrl={grainImg.src}
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
                behindGlowEnabled={true}
                behindGlowColor="hsla(347, 100%, 70%, 0.6)"
                innerGradient="linear-gradient(145deg,hsla(347, 40%, 45%, 0.55) 0%,hsla(203, 60%, 70%, 0.27) 100%)" 
                behindGlowSize={undefined} 
                miniAvatarUrl={undefined}
        />
        <ProfileCard
                name="Nia Esturi"
                title="Core Team"
                handle="nia"
                status="Online"
                contactText="Contact Me"
                avatarUrl={niaImg.src}
                iconUrl={iconPattern.src}
                grainUrl={grainImg.src}
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
                behindGlowEnabled={true}
                behindGlowColor="hsla(347, 100%, 70%, 0.6)"
                innerGradient="linear-gradient(145deg,hsla(347, 40%, 45%, 0.55) 0%,hsla(203, 60%, 70%, 0.27) 100%)" 
                behindGlowSize={undefined} 
                miniAvatarUrl={undefined}
                avatarStyle={{ top: 'unset', bottom: '-50px', transform: 'translateX(-50%)', width: '90%' }}
        />
        <ProfileCard
                name="Ritayush Dey"
                title="Core Team"
                handle="ritayush"
                status="Online"
                contactText="Contact Me"
                avatarUrl={ritayushImg.src}
                iconUrl={iconPattern.src}
                grainUrl={grainImg.src}
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
                behindGlowEnabled={true}
                behindGlowColor="hsla(347, 100%, 70%, 0.6)"
                innerGradient="linear-gradient(145deg,hsla(347, 40%, 45%, 0.55) 0%,hsla(203, 60%, 70%, 0.27) 100%)" 
                behindGlowSize={undefined} 
                miniAvatarUrl={undefined}
                avatarStyle={{ top: 'unset', bottom: '-115px', transform: 'translateX(-50%)', width: '80%' }}
        />
      </div>

      {/* Row 2: Tech Team */}
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
        <ProfileCard
                name="Aryan Krishna"
                title="Technology Team"
                handle="aryan"
                status="Online"
                contactText="Contact Me"
                avatarUrl={aryanImg.src}
                iconUrl={iconPattern.src}
                grainUrl={grainImg.src}
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
                behindGlowEnabled={true}
                behindGlowColor="hsla(192, 100%, 70%, 0.60)"
                innerGradient="linear-gradient(145deg,hsla(191, 40%, 45%, 0.55) 0%,hsla(205, 60%, 70%, 0.27) 100%)" 
                behindGlowSize={undefined} 
                miniAvatarUrl={undefined}
                avatarStyle={{ top: 'unset', bottom: '0px', transform: 'translateX(-50%)', width: '130%' }}
        />
        <ProfileCard
                name="Maan Biswas"
                title="Technology Team"
                handle="maan"
                status="Online"
                contactText="Contact Me"
                avatarUrl={maanImg.src}
                iconUrl={iconPattern.src}
                grainUrl={grainImg.src}
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
                behindGlowEnabled={true}
                behindGlowColor="hsla(192, 100%, 70%, 0.60)"
                innerGradient="linear-gradient(145deg,hsla(191, 40%, 45%, 0.55) 0%,hsla(205, 60%, 70%, 0.27) 100%)" 
                behindGlowSize={undefined} 
                miniAvatarUrl={undefined}
                avatarStyle={{ top: 'unset', bottom: '0px', transform: 'translateX(-50%)', width: '120%' }}
        />
        <ProfileCard
                name="Sresht Thiyagashankar"
                title="Technology Team"
                handle="sresth"
                status="Online"
                contactText="Contact Me"
                avatarUrl={sreshtImg.src}
                iconUrl={iconPattern.src}
                grainUrl={grainImg.src}
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
                behindGlowEnabled={true}
                behindGlowColor="hsla(192, 100%, 70%, 0.60)"
                innerGradient="linear-gradient(145deg,hsla(191, 40%, 45%, 0.55) 0%,hsla(205, 60%, 70%, 0.27) 100%)" 
                behindGlowSize={undefined} 
                miniAvatarUrl={undefined}
                avatarStyle={{ top: 'unset', bottom: '0px', transform: 'translateX(-68%)', width: '120%' }}
        />
        <ProfileCard
                name="Pratyush Vel Shankar"
                title="Technology Team"
                handle="pratyush"
                status="Online"
                contactText="Contact Me"
                avatarUrl={pratyushImg.src}
                iconUrl={iconPattern.src}
                grainUrl={grainImg.src}
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
                behindGlowEnabled={true}
                behindGlowColor="hsla(192, 100%, 70%, 0.60)"
                innerGradient="linear-gradient(145deg,hsla(191, 40%, 45%, 0.55) 0%,hsla(205, 60%, 70%, 0.27) 100%)" 
                behindGlowSize={undefined} 
                miniAvatarUrl={undefined}
                avatarStyle={{ top: 'unset', bottom: '-100px', transform: 'translateX(-50%)', width: '90%' }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
        <ProfileCard
                name="Suban Sudhakar"
                title="Finance Team"
                handle="suban"
                status="Online"
                contactText="Contact Me"
                avatarUrl={subanImg.src}
                iconUrl={iconPattern.src}
                grainUrl={grainImg.src}
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
                behindGlowEnabled={true}
                behindGlowColor="hsla(146, 100%, 70%, 0.60)"
                innerGradient="linear-gradient(145deg,hsla(161, 40%, 45%, 0.55) 0%,hsla(76, 60%, 70%, 0.27) 100%)" 
                behindGlowSize={undefined} 
                miniAvatarUrl={undefined}
                avatarStyle={{ top: 'unset', bottom: '-50px', transform: 'translateX(-50%)', width: '90%' }}
        />
        <ProfileCard
                name="Ryan Dennis Gomez"
                title="Finance Team"
                handle="ryan"
                status="Online"
                contactText="Contact Me"
                avatarUrl={ryanImg.src}
                iconUrl={iconPattern.src}
                grainUrl={grainImg.src}
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
                behindGlowEnabled={true}
                behindGlowColor="hsla(146, 100%, 70%, 0.60)"
                innerGradient="linear-gradient(145deg,hsla(161, 40%, 45%, 0.55) 0%,hsla(76, 60%, 70%, 0.27) 100%)" 
                behindGlowSize={undefined} 
                miniAvatarUrl={undefined}
                avatarStyle={{ top: 'unset', bottom: '-50px', transform: 'translateX(-50%)', width: '75%' }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem' }}> {/* please excuse use of inline CSS, its not linking for sm reason */}
        <ProfileCard
                className="pc-card-small"
                name="Anainah Nahas"
                title="Logistics Team"
                handle="anainah"
                status="Online"
                contactText="Contact Me"
                avatarUrl={anainahImg.src}
                iconUrl={iconPattern.src}
                grainUrl={grainImg.src}
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
                behindGlowEnabled={true}
                behindGlowColor="hsla(280, 100%, 70%, 0.60)"
                innerGradient="linear-gradient(145deg,hsla(280, 40%, 45%, 0.55) 0%,hsla(260, 60%, 70%, 0.27) 100%)" 
                behindGlowSize={undefined} 
                miniAvatarUrl={undefined}
                avatarStyle={{ top: 'unset', bottom: '0px', transform: 'translateX(-60%)', width: '110%' }}
        />
        <ProfileCard
                className="pc-card-small"
                name="Aryan Vanam"
                title="Logistics Team"
                handle="aryanv"
                status="Online"
                contactText="Contact Me"
                avatarUrl={aryanvImg.src}
                iconUrl={iconPattern.src}
                grainUrl={grainImg.src}
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
                behindGlowEnabled={true}
                behindGlowColor="hsla(280, 100%, 70%, 0.60)"
                innerGradient="linear-gradient(145deg,hsla(280, 40%, 45%, 0.55) 0%,hsla(260, 60%, 70%, 0.27) 100%)" 
                behindGlowSize={undefined} 
                miniAvatarUrl={undefined}
                avatarStyle={{ top: 'unset', bottom: '-120px', transform: 'translateX(-50%)', width: '80%' }}
        />
        <ProfileCard
                className="pc-card-small"
                name="Iniya Gopalakrishnan"
                title="Logistics Team"
                handle="iniya"
                status="Online"
                contactText="Contact Me"
                avatarUrl={iniyaImg.src}
                iconUrl={iconPattern.src}
                grainUrl={grainImg.src}
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
                behindGlowEnabled={true}
                behindGlowColor="hsla(280, 100%, 70%, 0.60)"
                innerGradient="linear-gradient(145deg,hsla(280, 40%, 45%, 0.55) 0%,hsla(260, 60%, 70%, 0.27) 100%)" 
                behindGlowSize={undefined} 
                miniAvatarUrl={undefined}
                avatarStyle={{ top: 'unset', bottom: '-50px', transform: 'translateX(-50%)', width: '120%' }}
        />
        <ProfileCard
                className="pc-card-small"
                name="Kenneth Jude Thomas"
                title="Logistics Team"
                handle="kenneth"
                status="Online"
                contactText="Contact Me"
                avatarUrl={kennethImg.src}
                iconUrl={iconPattern.src}
                grainUrl={grainImg.src}
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
                behindGlowEnabled={true}
                behindGlowColor="hsla(280, 100%, 70%, 0.60)"
                innerGradient="linear-gradient(145deg,hsla(280, 40%, 45%, 0.55) 0%,hsla(260, 60%, 70%, 0.27) 100%)" 
                behindGlowSize={undefined} 
                miniAvatarUrl={undefined}
                avatarStyle={{ top: 'unset', bottom: '0px', transform: 'translateX(-50%)', width: '180%' }}
        />
        <ProfileCard
                className="pc-card-small"
                name="Priyanka Perumal"
                title="Logistics Team"
                handle="priyanka"
                status="Online"
                contactText="Contact Me"
                avatarUrl={priyankaImg.src}
                iconUrl={iconPattern.src}
                grainUrl={grainImg.src}
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
                behindGlowEnabled={true}
                behindGlowColor="hsla(280, 100%, 70%, 0.60)"
                innerGradient="linear-gradient(145deg,hsla(280, 40%, 45%, 0.55) 0%,hsla(260, 60%, 70%, 0.27) 100%)" 
                behindGlowSize={undefined} 
                miniAvatarUrl={undefined}
                avatarStyle={{ top: 'unset', bottom: '0px', transform: 'translateX(-50%)', width: '90%' }}
        />
        <ProfileCard
                className="pc-card-small"
                name="Siya Ganesh"
                title="Logistics Team"
                handle="siya"
                status="Online"
                contactText="Contact Me"
                avatarUrl={siyaImg.src}
                iconUrl={iconPattern.src}
                grainUrl={grainImg.src}
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
                behindGlowEnabled={true}
                behindGlowColor="hsla(280, 100%, 70%, 0.60)"
                innerGradient="linear-gradient(145deg,hsla(280, 40%, 45%, 0.55) 0%,hsla(260, 60%, 70%, 0.27) 100%)" 
                behindGlowSize={undefined} 
                miniAvatarUrl={undefined}
                avatarStyle={{ top: 'unset', bottom: '0px', transform: 'translateX(-60%)', width: '90%' }}
        />
      </div>
    </div>
  );
}
