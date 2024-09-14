import { useDispatch } from "react-redux";
import {
  Card,
  CardActionArea,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import { TypographyProps } from "@mui/material/Typography/Typography";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import {
  FindAllApplicationsDocument,
  PrivilegesEnum,
} from "../../_generated_gql_/graphql.ts";
import { Animated } from "./components/Animated.tsx";
import ASSETS from "../../resources/ASSETS.ts";
import { setselectedApplication } from "../../redux/features/appNavigation/appNavigationSlice.ts";
import { APPLICATIONS } from "../../redux/RtkQueryApis/constants.ts";
import { getLink, routs } from "../../routing/routs.tsx";
import { AnimatedLock } from "./components/AnimatedLock.tsx";
import { ASSETS_LOTTIE } from "../../resources/lotties/ASSETS_LOTTIE.ts";
import { useHasAuthorities } from "../../security/useHasAuthoritie.ts";
import { useQuery } from "@apollo/client";

function MediaCard({
  image,
  title,
  action,
  width,
}: {
  image: string;
  title?: string;
  titleProps?: TypographyProps;
  disabled?: boolean;
  action: any;
  width: number;
}) {
  return (
    <Card sx={{ width: width }}>
      <CardActionArea onClick={action}>
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          padding={2}
          paddingBottom={5}
        >
          <img
            src={image}
            style={{
              width: width * 0.8,
              height: width * 0.8,
              objectFit: "contain",
            }}
          />
        </Stack>
        {
          <Typography gutterBottom variant="h5" fontWeight={"bold"}>
            {title}
          </Typography>
        }
      </CardActionArea>
    </Card>
  );
}

const ApplicationChoice = () => {
  // const user = useSelector(selectLoggedInUser)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [fakeLoading, setFakeLoading] = useState(true);

  const hasApplicationPam = useHasAuthorities(PrivilegesEnum.ApplicationPam);
  const hasApplicationTextReglementaire = useHasAuthorities(
    PrivilegesEnum.ApplicationTextReglementaire,
  );
  const hasApplicationTextRecrutement = useHasAuthorities(
    PrivilegesEnum.ApplicationRecrutement,
  );
  const hasApplicationApplicationSimulation = useHasAuthorities(
    PrivilegesEnum.ApplicationSimulation,
  );

  const { data: allApplications } = useQuery(FindAllApplicationsDocument);

  const hasAnyApplication = () => {
    return {
      hasAthoritie:
        hasApplicationPam ||
        hasApplicationApplicationSimulation ||
        hasApplicationTextReglementaire ||
        hasApplicationTextRecrutement,
      loading: false,
    };
  };

  const width = 220;

  useEffect(() => {
    setTimeout(() => setFakeLoading(false), 2500);
  }, []);

  return (
    <div
      className={
        "bg-gray-300 drop-shadow-2xl rounded-2xl text-center p-4 m-10 flex flex-col items-center justify-center"
      }
      style={{ height: "calc(100vh - 150px)" }}
    >
      {!(hasAnyApplication().loading || fakeLoading) && (
        <Typography variant={"h4"} fontWeight={"bold"}>
          النظام المعلوماتي للمديرية الفرعية للموارد البشرية
          <br /> مديرية الخدمة الوطنية/ و د و
        </Typography>
      )}
      <Stack
        direction={"row"}
        padding={5}
        spacing={2}
        justifyContent={"center"}
      >
        {hasApplicationTextRecrutement && !fakeLoading && (
          <div className={"shadow-lg rounded-2xl"}>
            <Animated
              index={2}
              config={{
                tension: 120,
                friction: 14,
                clamp: true,
              }}
              delay={0}
            >
              <MediaCard
                width={width}
                image={ASSETS.PROCESS}
                title={"التجنيد و التوظيف"}
                titleProps={{ fontWeight: 40 }}
                action={() => {
                  dispatch(setselectedApplication(APPLICATIONS.RECRUTEMENT));
                  navigate(getLink(routs.LandingPageRecrutement));
                }}
              />
            </Animated>
          </div>
        )}
        {hasApplicationTextReglementaire && !fakeLoading && (
          <div className={"shadow-lg rounded-2xl"}>
            <Animated
              index={1}
              config={{
                tension: 120,
                friction: 14,
                clamp: true,
              }}
              delay={50}
            >
              <MediaCard
                width={width}
                image={ASSETS.TEXT_REGLEMONTAIRE}
                title={"النصوص التنظيمية"}
                action={() => {
                  dispatch(
                    setselectedApplication(APPLICATIONS.TEXT_REGLEMENTAIRE),
                  );
                  navigate(getLink(routs.LandingPageTextReglementaire));
                }}
              />
            </Animated>
          </div>
        )}
        {hasApplicationPam && !fakeLoading && (
          <div className={"shadow-lg rounded-2xl"}>
            <Animated
              index={-1}
              config={{
                tension: 120,
                friction: 14,
                clamp: true,
              }}
              delay={100}
            >
              <MediaCard
                width={width}
                image={ASSETS.Turnover2}
                title={"المخطط السنوي للتنقيل"}
                action={() => {
                  dispatch(setselectedApplication(APPLICATIONS.PAM));
                  navigate(getLink(routs.PamHome));
                }}
              />
            </Animated>
          </div>
        )}
        {hasApplicationApplicationSimulation && !fakeLoading && (
          <div className={"shadow-lg rounded-2xl"}>
            <Animated
              index={-2}
              config={{
                tension: 120,
                friction: 14,
                clamp: true,
              }}
              delay={150}
            >
              <MediaCard
                width={width}
                image={ASSETS.simulationHomePage}
                title={"نظام المحاكات"}
                action={() => {
                  dispatch(setselectedApplication(APPLICATIONS.SIMULATION));
                  navigate(getLink(routs.SimulationHome));
                }}
              />
            </Animated>
          </div>
        )}
        {hasApplicationApplicationSimulation && !fakeLoading && (
          <div className={"shadow-lg rounded-2xl"}>
            <Animated
              index={-2}
              config={{
                tension: 120,
                friction: 14,
                clamp: true,
              }}
              delay={150}
            >
              <MediaCard
                width={width}
                image={ASSETS.PROCESS}
                title={"الموارد البشرية"}
                action={() => {
                  dispatch(setselectedApplication(APPLICATIONS.RH));
                  navigate(getLink(routs.RhHome));
                }}
              />
            </Animated>
          </div>
        )}

        {!fakeLoading && (
          <div className={"shadow-lg rounded-2xl"}>
            <Animated
              index={-2}
              config={{
                tension: 120,
                friction: 14,
                clamp: true,
              }}
              delay={150}
            >
              <MediaCard
                width={width}
                image={ASSETS.PROCESS}
                title={"المراسلات"}
                action={() => {
                  dispatch(setselectedApplication(APPLICATIONS.GEC));
                  navigate(getLink(routs.HomeGec));
                }}
              />
            </Animated>
          </div>
        )}

        {!hasAnyApplication().hasAthoritie &&
          !(hasAnyApplication().loading || fakeLoading) && (
            <Stack spacing={4} alignItems={"center"}>
              <AnimatedLock />
              <Typography variant={"h4"} fontWeight={"bold"} color={"#a40101"}>
                {" "}
                ليس لديك حقوق الولوج الكافية إتصل بالإدارة{" "}
              </Typography>
            </Stack>
          )}
        {(hasAnyApplication().loading || fakeLoading) && (
          <Stack spacing={2} alignItems={"center"}>
            {/*<img src={ASSETS.lock} style={{width: 300, height: 300}} alt={'lock'}/>*/}
            <Lottie
              style={{ width: "350px" }}
              animationData={ASSETS_LOTTIE.shield}
            ></Lottie>
            <LinearProgress sx={{ width: "100%" }} />
            <Typography variant={"h5"} fontWeight={"bold"} color={"#a40101"}>
              {" "}
              الرجاء الانتظار{" "}
            </Typography>
          </Stack>
        )}
        {/*<Paper elevation={5}>*/}
        {/*   <MediaCard/>*/}
        {/*</Paper>*/}
      </Stack>
    </div>
  );
};

export default ApplicationChoice;
