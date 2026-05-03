"use client";

import { Card, CardBody, CardHeader, Chip, Button } from "@nextui-org/react";
import Link from "next/link";

type Item = {
  id: number;
  name: string;
  description: string;
};

export default function ItemsClient({
  items,
  total,
  totalPages,
  page,
  error,
}: {
  items: Item[];
  total: number;
  totalPages: number;
  page: number;
  error: string | null;
}) {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white ">
      <div className="mx-auto max-w-5xl">
        <Chip color="primary" variant="flat">Server-Side Rendering</Chip>

        <h1 className="mt-4 text-4xl font-bold">Items Database</h1>

        <p className="mt-2 text-slate-400">
          Data fetched from MySQL using Next.js, Tailwind CSS, and NextUI.
        </p>

        {error ? (
          <Card className="mt-6 border border-red-500 bg-red-950">
            <CardBody>
              <h2 className="font-semibold text-red-200">Database Error</h2>
              <p className="mt-1 text-sm text-red-100">{error}</p>
            </CardBody>
          </Card>
        ) : (
          <>
            <p className="mt-6 text-sm text-slate-400">Total items: {total}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {items.map((item) => (
                <Card key={item.id} className="bg-white/10 text-white p-2 rounded">
                  <CardHeader>
                    <div>
                      <p className="text-sm text-slate-400">ID: {item.id}</p>
                      <h2 className="text-xl font-semibold">{item.name}</h2>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <p className="text-sm text-slate-300">
                      {item.description}
                    </p>
                  </CardBody>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
              <Button
                as={Link}
                href={`/?page=${page - 1}`}
                isDisabled={page <= 1}
                variant="flat"
              >
                Previous
              </Button>

              <span className="text-sm text-slate-400">
                Page {page} of {totalPages}
              </span>

              <Button
                as={Link}
                href={`/?page=${page + 1}`}
                isDisabled={page >= totalPages}
                color="primary"
              >
                Next
              </Button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}