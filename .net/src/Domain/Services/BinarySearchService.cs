namespace Api.Services;

public class BinarySearch
{
    public static int Search(int[] items, int target)
    {
        int start = 0;
        int end = items.Length - 1;

        while (start <= end)
        {
            int mid = start + (end - start) / 2;

            if (items[mid] == target)
            {
                return mid;
            }

            if (items[mid] < target)
            {
                start = mid + 1;
            }
            else
            {
                end = mid - 1;
            }
        }
        return 0;
    }
}