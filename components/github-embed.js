'use strict'

import isGithubRepo from 'is-github-repo'
import gitUrlPrettify from 'git-url-prettify'

import { colors, typography } from './../theme'

const GithubEmbed = ({ project, description }) => {
  const proj = isGithubRepo(project)
    ? project
    : 'https://github.com/bukinoshita'
  const gitUrl = gitUrlPrettify(proj)

  return (
    <a href={gitUrl}>
      <div className="project">
        <svg width="26px" height="26px" viewBox="0 0 32 32">
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="github" fill={colors.white}>
              <path d="M15.9985267,0 C7.16436969,0 0,7.3446728 0,16.4054189 C0,23.6534115 4.58405721,29.801667 10.9420179,31.9709287 C11.7425335,32.1219915 12.0342552,31.6154276 12.0342552,31.1803667 C12.0342552,30.7916318 12.020504,29.7593694 12.0126462,28.3907406 C7.56217195,29.3817125 6.62316216,26.1912664 6.62316216,26.1912664 C5.89533135,24.2959319 4.84631204,23.7913822 4.84631204,23.7913822 C3.3935971,22.7742261 4.95632156,22.7943678 4.95632156,22.7943678 C6.56226404,22.9101826 7.40697996,24.4852639 7.40697996,24.4852639 C8.83415697,26.9918991 11.1522146,26.2678048 12.063722,25.8478503 C12.2090917,24.7883966 12.6226097,24.0653094 13.0793456,23.6554257 C9.52662758,23.2415136 5.7912152,21.8336084 5.7912152,15.5473822 C5.7912152,13.7567847 6.41492986,12.2914756 7.43841125,11.1454126 C7.27339697,10.7304934 6.72433162,9.06175317 7.5955677,6.80386802 C7.5955677,6.80386802 8.93827312,6.36276467 11.9949661,8.4857004 C13.27088,8.12113554 14.6401056,7.93986019 16.0004911,7.93281059 C17.3598944,7.93986019 18.7281378,8.12113554 20.0060161,8.4857004 C23.0607447,6.36276467 24.4014856,6.80386802 24.4014856,6.80386802 C25.2746861,9.06175317 24.7256208,10.7304934 24.5615888,11.1454126 C25.5870346,12.2914756 26.2058381,13.7567847 26.2058381,15.5473822 C26.2058381,21.8497218 22.4645324,23.2364782 18.9010099,23.6423336 C19.4746309,24.1488974 19.9863716,25.1499402 19.9863716,26.6807098 C19.9863716,28.8731344 19.966727,30.6425832 19.966727,31.1803667 C19.966727,31.6194559 20.255502,32.1300481 21.0668222,31.9699216 C27.4198717,29.7956245 32,23.6513973 32,16.4054189 C32,7.3446728 24.8356303,0 15.9985267,0" />
            </g>
          </g>
        </svg>

        <div>
          <h4>
            {proj}
          </h4>

          <p>
            {description}
          </p>
        </div>
      </div>

      <span>
        Check on Github
        <span className="arrow">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" y1="12" x2="20" y2="12" />
            <polyline points="14 6 20 12 14 18" />
          </svg>
        </span>
      </span>

      <style jsx>{`
        a {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid #333;
          padding: 20px;
          transition: all 0.2s ease;
          margin-top: 50px;
          margin-bottom: 50px;
        }

        a:hover {
          border-color: ${colors.white};
        }

        a:hover .arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .project {
          display: flex;
          align-items: center;
        }

        .project svg {
          margin-right: 15px;
          vertical-align: middle;
        }

        h4 {
          color: ${colors.white};
          font-size: ${typography.f14};
          margin-bottom: 5px;
        }

        p {
          font-size: 13px;
          color: ${colors.white};
        }

        span {
          color: ${colors.white};
          font-size: ${typography.f12};
          text-transform: lowercase;
          font-weight: ${typography.semibold};
        }

        .arrow {
          display: inline-block;
          margin-left: 5px;
          opacity: 0;
          transform: translateX(-20px);
          transition: all 0.2s ease;
          vertical-align: initial;
        }
      `}</style>
    </a>
  )
}

export default GithubEmbed
