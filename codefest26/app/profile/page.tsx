'use client';

import ProfileCard from '@/components/ProfileCard';

import akshatImg from '@/public/images/akshat_core.png';
import adithyaImg from '@/public/images/adithya_core.png';
import soumyajitImg from '@/public/images/soumyajit_core.png';
import niaImg from '@/public/images/nia_core.png';
import ritayushImg from '@/public/images/ritayush_core.png';
import iconPattern from '@/public/images/iconpattern.png';
import grainImg from '@/public/images/grain.webp';

export default function ProfilePage() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh', 
      backgroundColor: 'transparent',
      padding: '0rem',
      gap: '1.5rem'
    }}>
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
  );
}
