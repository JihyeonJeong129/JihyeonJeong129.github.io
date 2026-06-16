# Jihyeon Jeong Portfolio

개인 GitHub Pages 포트폴리오 저장소입니다.  
[al-folio](https://github.com/alshedivat/al-folio) Jekyll 테마를 기반으로, 프로젝트, CV, 수상/자격증, 사진 아카이브, 블로그 초안을 관리합니다.

## Contents

- **About**: 소개, 관심 분야, 대표 프로젝트 요약
- **Projects**: 홈랩 인프라, 백엔드/DevOps, FPGA, ROS, 데이터 분석, 팀 프로젝트 정리
- **CV**: 학력, 경험, 교육 이수, 수상, 자격증, 기술 스택
- **Awards & Certifications**: 수상 내역과 자격증 상세 페이지
- **Photos**: 활동 및 대회 사진 아카이브
- **Blog**: 홈랩 운영 기록과 장애 기록 초안
- **Coursework**: 대학 전공 과목 및 학습 내용 요약

## Repository Structure

```text
_pages/                 Main pages such as About, CV, Projects, Photos
_projects/              Project detail pages in English and Korean
_awardcertification/    Award and certification detail pages
_photos/                Photo archive entries
_posts/                 Blog post drafts and placeholders
_data/                  Structured data for CV, socials, repositories
_includes/, _layouts/   Jekyll/al-folio templates
assets/                 Images, PDFs, scripts, styles, and generated assets
```

## Local Development

```bash
bundle install
bundle exec jekyll serve --livereload --livereload-port 35730
```

If the site port is already in use:

```bash
bundle exec jekyll serve --port 4001 --livereload --livereload-port 35730
```

Then open `http://localhost:4001`.

## Notes

- The site is configured for GitHub Pages deployment.
- Internal links are written to work both locally and on GitHub Pages.
- Some blog posts are placeholders and are intentionally excluded from search.
- The original theme license notice is preserved below.

## License

The theme is available as open source under the terms of the [MIT License](https://github.com/alshedivat/al-folio/blob/main/LICENSE).

Originally, **al-folio** was based on the [\*folio theme](https://github.com/bogoli/-folio) (published by [Lia Bogoev](https://liabogoev.com) and under the MIT license). Since then, it got a full re-write of the styles and many additional cool features.
