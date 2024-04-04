package com.example.grh_n.exceptionshandling;

import lombok.Data;

@Data
public class StackTraceElementDto {

   public StackTraceElementDto(StackTraceElement stackTraceElement) {

      this.classLoaderName = stackTraceElement.getClassLoaderName() ;
      this.moduleName = stackTraceElement.getModuleName() ;
      this.moduleVersion = stackTraceElement.getModuleVersion() ;
      this.methodName = stackTraceElement.getMethodName() ;
      this.fileName = stackTraceElement.getFileName() ;
      this.className = stackTraceElement.getClassName() ;
      this.lineNumber = stackTraceElement.getLineNumber() ;

   }

   private String classLoaderName;
   private String moduleName;
   private String moduleVersion;
   private String methodName;
   private String fileName;
   private String className ;
   private int    lineNumber;

}
