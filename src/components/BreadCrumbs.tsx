import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { useAppSelector } from "../app/reduxHooks";

interface Props {
  url: string;
}

export const BreadCrumbs: React.FC<Props> = ({ url }) => {
  const breadcrumbs = url.split("/");
  const repo = useAppSelector((state) => state.repo.repo);

  return (
    <Breadcrumb spacing="8px" separator=">">
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
