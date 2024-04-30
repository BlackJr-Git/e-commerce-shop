import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function PaginationComponent({ setPages, pages }) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => setPages(pages === 1 ? 1 : pages - 1)} /> 
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={() => setPages(1)}>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={() => setPages(2)}>2</PaginationLink>
        </PaginationItem>
        {/* <PaginationItem>
          <PaginationLink onClick={() => setPages(3)}>3</PaginationLink>
        </PaginationItem> */}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={() => setPages(pages + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationComponent;
