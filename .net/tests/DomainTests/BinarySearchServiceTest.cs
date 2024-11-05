using Api.Services;
using Xunit;

namespace DomainTests;

public class BinarySearchTest
{
    [Fact]
    public void Search_SholdReturnTheIndexIfTheTargetIsFound()
    {
        var items = new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

        var target = 7;

        var result  = BinarySearch.Search(items, target);

        Assert.Equal(6, result);
    }
}
