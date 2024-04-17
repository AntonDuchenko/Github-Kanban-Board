import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { useAppSelector } from "../app/hooks";

interface Props {
  url: string;
}

export const BreadCrumbs: React.FC<Props> = ({ url }) => {
  const breadcrumbs = url.split("/");
  const repo = useAppSelector((state) => state.repo.repo);

  return (
    <Breadcrumb
      spacing="8px"
      separator={
        <svg
          width="22"
          height="24"
          viewBox="0 0 22 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.0575 7.5L8 8.5575L11.435 12L8
            15.4425L9.0575 16.5L13.5575 12L9.0575 7.5Z"
            fill="#1A202C"
          />
        </svg>
      }
    >
      {breadcrumbs.map((breadcrum, index) => (
        <BreadcrumbItem key={breadcrum}>
          <BreadcrumbLink
            target="_blank"
            href={index === 0 ? repo?.owner.html_url : repo?.html_url}
            textTransform="capitalize"
          >
            {breadcrum}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};
