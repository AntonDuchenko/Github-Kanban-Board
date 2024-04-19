import { Box, Image, Skeleton, Text } from "@chakra-ui/react";
import { UrlInput } from "../UrlInput/UrlInput";
import { BreadCrumbs } from "../BreadCrumbs/BreadCrumbs";
import { useAppSelector } from "../../app/reduxHooks";
import star from "../../../public/assets/star.svg";
import { useState } from "react";

export const Header: React.FC = () => {
  const [url, setUrl] = useState("");

  const { repo, loading: isLoading } = useAppSelector((state) => state.repo);

  return (
    <Box marginBottom="20px" role="header">
      <UrlInput url={url} setUrl={setUrl} />

      {repo && (
        <Skeleton height="25px" isLoaded={!isLoading}>
          {repo && (
            <Box display="flex" gap="20px">
              <BreadCrumbs url={repo.full_name} />

              <Box display="flex" gap="10px">
                <Image src={star} alt="star" width="24px" height="24px" />

                <Text>
                  {Math.round((repo?.stargazers_count as number) / 1000)} K
                  stars
                </Text>
              </Box>
            </Box>
          )}
        </Skeleton>
      )}
    </Box>
  );
};
