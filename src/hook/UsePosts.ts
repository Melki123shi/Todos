import {
  // keepPreviousData,
  useInfiniteQuery,
} from "@tanstack/react-query";
import ApiClient from "../services/apiClient";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostQuery {
  // userId: number | undefined;
  // pageNumber: number;
  pagesize: number;
}

const apiClient = new ApiClient<Post>("/posts");

const UsePosts = (query: PostQuery) => {
  return useInfiniteQuery<Post[], Error>({
    queryKey: ["posts", query],
    // queryKey: query.userId ? ["users", query.userId, "posts", query] : ["posts"],
    queryFn: async ({ pageParam }: { pageParam: unknown }) => {
      const page = pageParam as number;
      return apiClient.getAll({ _page: page, _limit: query.pagesize });
    },
    staleTime: 3000,
    // placeholderData: keepPreviousData,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === query.pagesize
        ? allPages.length + 1
        : undefined;
    },
  });
};

export default UsePosts;
