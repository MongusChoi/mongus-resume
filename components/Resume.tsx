'use client';

import React from 'react';
import { 
  Typography, 
  List, 
  Chip,
  Grid,
  Divider
} from '@mui/material';
import '../styles/Resume.css';
import Image from 'next/image';

const SkillChip: React.FC<{ skill: string }> = ({ skill }) => (
  <Grid item>
    <Chip
      avatar={
        <Image
          src={`/${skill.toLowerCase().replace('.', '').replace('/', '')}.png`}
          alt={skill}
          width={24}
          height={24}
          style={{ 
            objectFit: 'contain',
            backgroundColor: 'transparent' 
          }}
        />
      }
      label={skill}
      color="primary"
      variant="outlined"
      sx={{ 
        fontSize: '1.2rem', 
        padding: '25px 15px',
        '& .MuiChip-avatar': {
          width: 24,
          height: 24,
          marginLeft: '8px'
        }
      }}
    />
  </Grid>
);

const SkillSection: React.FC<{ title: string, skills: string[] }> = ({ title, skills }) => (
  <>
    <Typography variant="h5" color="primary" sx={{ mb: 2 }}>
      {title}
    </Typography>
    <Grid container spacing={2} sx={{ mb: 6 }}>
      {skills.map((skill) => (
        <SkillChip key={skill} skill={skill} />
      ))}
    </Grid>
  </>
);

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Typography variant="h3" gutterBottom color="primary" sx={{ mb: 4 }}>
    {children}
  </Typography>
);

const ExperienceItem: React.FC<{
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
}> = ({ company, position, period, responsibilities }) => (
  <div className="experience-item">
    <div className="experience-content">
      <div className="experience-header">
        <div className="title-section">
          <Typography variant="h5" className="company-name">
            {company}
          </Typography>
          <Typography variant="h6" className="position-title">
            {position}
          </Typography>
        </div>
        <Typography variant="subtitle1" className="period">
          {period}
        </Typography>
      </div>
      <div className="experience-body">
        {responsibilities.map((responsibility, index) => (
          <div key={index} className="responsibility-item">
            <span className="bullet">•</span>
            <span className="responsibility-text">{responsibility}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Resume: React.FC = () => {
  const languageSkills = ['JavaScript', 'TypeScript', 'C++'];
  const frontendSkills = ['React.js', 'Redux', 'Next.js'];
  const backendSkills = ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'MSAzure', 'AWS'];

  const experiences = [
    {
      company: '비디오몬스터',
      position: '풀스택 개발자',
      period: '2020.05 - 2024.12',
      responsibilities: [
        'REST API 설계 및 개발 (Node.js + Express.js + MongoDB)',
        '데이터베이스 설계 및 최적화 (MongoDB, PostgreSQL)',
        '클라우드 인프라 구축 및 관리 (MS Azure)',
        '프론트엔드 개발 지원 (React.js)'
      ]
    },
    {
      company: '원이멀스',
      position: 'VR 개발자',
      period: '2019.07 - 2019.12',
      responsibilities: [
        'Unreal Engine 4 게임 개발'
      ]
    },
    {
      company: '포켓메모리',
      position: 'VR 개발자',
      period: '2018.10 - 2019.07',
      responsibilities: [
        'Unreal Engine 4를 이용한 체험형 VR 컨텐츠 개발'
      ]
    }
  ];

  return (
    <div className="resume-container">
      <section className="resume-section" style={{ animationDelay: '0.1s' }}>
        <SectionTitle>Introduce</SectionTitle>
        <Typography component="div" variant="h6" sx={{ mb: 4, lineHeight: 1.8 }}>
          FrontEnd + BackEnd 개발을 경험해본 5년차 백엔드 개발자 최명수 입니다<br />
          비디오몬스터에서 4년이상 재직하며 전반적인 웹 개발 지식을 습득하였습니다.<br />
          React.JS로 프론트 퍼블리싱 및 API 연동 작업을 경험하였으며, Node.JS + Express.JS로 백엔드 API 서버 유지보수 경험이 있습니다.<br />
          JavaScript + TypeScript를 기본적으로 다룰 수 있으며, RDB(PostgreSQL) + NoSQL(MongoDB) 개발 경험이 있고, Jest를 이용한 테스트 코드 작성 경험이 있습니다.<br />
          Microsoft Azure 환경에서 CI/CD 구성 경험이 있으며, Linux 환경에서 작업하는 것이 익숙합니다.<br />
          새로운 환경에 적응이 빨라 신기술을 습득하는데 전혀 거부감이 없으며, 늘 최적의 코드를 사용하기 위해 고민합니다.
        </Typography>
      </section>

      <Divider sx={{ my: 6 }} />

      <section className="resume-section" style={{ animationDelay: '0.3s' }}>
        <SectionTitle>Skills</SectionTitle>
        <SkillSection title="Language" skills={languageSkills} />
        <SkillSection title="Frontend" skills={frontendSkills} />
        <SkillSection title="Backend" skills={backendSkills} />
      </section>

      <Divider sx={{ my: 6 }} />

      <section className="resume-section" style={{ animationDelay: '0.5s' }}>
        <SectionTitle>Experience</SectionTitle>
        <List>
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </List>
      </section>
    </div>
  );
};

export default Resume; 