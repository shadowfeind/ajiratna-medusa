import { defineRouteConfig } from "@medusajs/admin-sdk";
import { TagSolid } from "@medusajs/icons";
import { Container, Heading } from "@medusajs/ui";
import { useQuery } from "@tanstack/react-query";
import { sdk } from "../../lib/sdk";
import { useMemo, useState } from "react";
import { Table } from "../../components/table";

type BrandsResponse = {
  brands: {
    id: string;
    name: string;
  }[];
  count: number;
  limit: number;
  offset: number;
};

const BrandsPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const limit = 15;
  const offset = useMemo(() => {
    return currentPage * limit;
  }, [currentPage]);

  const { data } = useQuery<BrandsResponse>({
    queryFn: () =>
      sdk.client.fetch(`/admin/brands`, {
        query: {
          limit,
          offset,
        },
      }),
    queryKey: [["brands", limit, offset]],
  });

  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <Heading level="h2">Brands</Heading>
        </div>
      </div>
      <Table
        columns={[
          {
            key: "id",
            label: "#",
          },
          {
            key: "name",
            label: "Name",
          },
        ]}
        data={data?.brands || []}
        pageSize={data?.limit || limit}
        count={data?.count || 0}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
};

export const config = defineRouteConfig({
  label: "Brands",
  icon: TagSolid,
});

export default BrandsPage;
