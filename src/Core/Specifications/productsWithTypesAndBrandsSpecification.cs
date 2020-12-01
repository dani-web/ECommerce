using Core.Entities;
using System;
using System.Linq.Expressions;

namespace Core.Specifications
{
    public class ProductsWithTypesAndBrandsSpecification : BaseSpecification<Product>
    {
        /*public ProductsWithTypesAndBrandsSpecification()
        {
            AddInclude(x => x.ProductType);
            AddInclude(x => x.ProductBrand);
        }*/
        public ProductsWithTypesAndBrandsSpecification(int id): base(x=>x.Id==id)
        {
            AddInclude(x => x.ProductType);
            AddInclude(x => x.ProductBrand);
        }

        public ProductsWithTypesAndBrandsSpecification()
        {
        }

        private void AddOrderByDescending(Func<object, object> p)
        {
            throw new NotImplementedException();
        }

        private void ApplyPaging(int v, int pageSize)
        {
            throw new NotImplementedException();
        }

        private void AddOrderBy(Func<object, object> p)
        {
            throw new NotImplementedException();
        }

        

        private void AddInclude(Func<object, object> p)
        {
            AddInclude(x => x.ProductType);
            AddInclude(x => x.ProductBrand);
        }
    }
}
