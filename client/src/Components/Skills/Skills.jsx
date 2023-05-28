import React from "react";
import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();

  return (
    <div >
      <div className="flex items-center justify-center">{t("skills.header")}</div>
      <div className="flex flex-col gap-y-10">

      <div>
      <div className="flex items-center justify-center text-gray-400">Front-End</div>
      <div className="flex flex-col gap-y-5 items-center justify-center">
      <div className="flex flex-row items-center justify-center gap-x-5">
        <img
          src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
          alt=""
          srcset=""
        />
        <img
          src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
          alt=""
          srcset=""
        />
        <img
          src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
          alt=""
          srcset=""
        />
        <img
          src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"
          alt=""
          srcset=""
        />
        <img
          src="https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white"
          alt=""
          srcset=""
        />
        <img
          src="https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white"
          alt=""
          srcset=""
        />
        <img
          src="https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=material-ui&logoColor=white"
          alt=""
          srcset=""
        />
        <img
          src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
          alt=""
          srcset=""
        />
      </div>
      <div className="flex flex-row items-center justify-center gap-x-5">
        <img
          src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
          alt=""
          srcset=""
        />
        <img
          src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"
          alt=""
          srcset=""
        />{" "}
        <img
        src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
        alt=""
        srcset=""
      />
      <img src="https://img.shields.io/badge/-AntDesign-%230170FE?style=for-the-badge&logo=ant-design&logoColor=white" alt="" srcset="" />
      <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" alt="" srcset="" />
      </div>
      </div>
      
      </div>
      <div>
      <div className="flex items-center justify-center text-gray-400">Back-End</div>
      <div className="flex flex-col gap-y-5 items-center justify-center">
      <div className="flex flex-row items-center justify-center gap-x-5 flex-wrap md:">
<img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="" srcset="" />
<img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" alt="" srcset="" />
      <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="" srcset="" />
      <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="" srcset="" />
      <img src="https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101" alt="" />
      <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="" srcset="" />
      <img src="https://img.shields.io/badge/Google%20Cloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white" alt="" srcset="" />
      </div>
      <div className="flex flex-row items-center justify-center gap-x-5">
<img src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white" alt="" srcset="" />      </div>
     
      </div>
      </div>
      </div>
</div>

  );
}

export default Skills;
