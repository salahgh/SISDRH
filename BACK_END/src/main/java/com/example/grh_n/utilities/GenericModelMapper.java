package com.example.grh_n.utilities;

import lombok.NoArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@NoArgsConstructor
public class GenericModelMapper {

   private static final ModelMapper modelMapper = new ModelMapper();

   public static <T, D> D map(T source, Class<D> destinationType) {
      return modelMapper.map(source, destinationType);
   }

   public static <T, D> List<D> mapList(List<T> sourceList, Class<D> destinationType) {
      List<D> destinationList = new ArrayList<>();
      for (T source : sourceList) {
         destinationList.add(modelMapper.map(source, destinationType));
      }
      return destinationList;
   }

   public static <T, D> Page<D> mapPage(Page<T> sourcePage, Class<D> destinationType) {
      return sourcePage.map((item) -> modelMapper.map(item, destinationType));
   }

   public static <T, D> Iterator<D> mapIterator(Iterator<T> sourceIterator, Class<D> destinationType) {
      List<D> destinationList = new ArrayList<>();
      while (sourceIterator.hasNext()) {
         T source = sourceIterator.next();
         destinationList.add(modelMapper.map(source, destinationType));
      }
      return destinationList.iterator();
   }
}
