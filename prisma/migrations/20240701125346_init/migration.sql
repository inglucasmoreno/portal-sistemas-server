-- CreateTable
CREATE TABLE `Usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuario` VARCHAR(30) NOT NULL,
    `apellido` VARCHAR(50) NOT NULL,
    `nombre` VARCHAR(50) NOT NULL,
    `dni` VARCHAR(30) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `telefono` VARCHAR(50) NOT NULL,
    `asignableSolicitud` BOOLEAN NULL DEFAULT false,
    `role` VARCHAR(191) NULL DEFAULT 'ADMIN_ROLE',
    `activo` BOOLEAN NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Usuarios_usuario_key`(`usuario`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dependencias` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(150) NOT NULL,
    `activo` BOOLEAN NULL DEFAULT true,
    `creatorUserId` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Dependencias_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UsuariosDependencias` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dependenciaId` INTEGER NULL,
    `usuarioId` INTEGER NULL,
    `soloLectura` BOOLEAN NULL DEFAULT false,
    `activo` BOOLEAN NULL DEFAULT true,
    `creatorUserId` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TiposOrdenServicio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(150) NOT NULL,
    `activo` BOOLEAN NULL DEFAULT true,
    `creatorUserId` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `TiposOrdenServicio_descripcion_key`(`descripcion`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrdenesServicio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fechaSinAsignar` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fechaEnProceso` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fechaPendiente` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fechaCierre` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `tipoOrdenServicioId` INTEGER NULL,
    `dependenciaId` INTEGER NULL,
    `usuarioId` INTEGER NULL,
    `telefonoContacto` VARCHAR(50) NOT NULL,
    `observacionSolicitud` VARCHAR(500) NULL,
    `motivoSinSolucion` VARCHAR(500) NULL DEFAULT '',
    `motivoPendiente` VARCHAR(500) NULL DEFAULT '',
    `comentariosSolucion` VARCHAR(500) NULL,
    `estadoOrden` VARCHAR(191) NULL DEFAULT 'Sin asignar',
    `estadoEquipo` VARCHAR(191) NULL DEFAULT 'Funcionando',
    `activo` BOOLEAN NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `creatorUserId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrdenesServicioToTecnicos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ordenServicioId` INTEGER NULL,
    `tecnicoId` INTEGER NULL,
    `activo` BOOLEAN NULL DEFAULT true,
    `creatorUserId` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrdenesServicioHistorial` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` VARCHAR(150) NOT NULL,
    `motivoSinSolucion` VARCHAR(500) NULL,
    `motivoPendiente` VARCHAR(500) NULL,
    `comentariosSolucion` VARCHAR(500) NULL,
    `activo` BOOLEAN NULL DEFAULT true,
    `creatorUserId` INTEGER NULL,
    `ordenServicioId` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrdenesServicioHistorialToTecnicos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ordenServicioHistorialId` INTEGER NULL,
    `tecnicoId` INTEGER NULL,
    `activo` BOOLEAN NULL DEFAULT true,
    `creatorUserId` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Dependencias` ADD CONSTRAINT `Dependencias_creatorUserId_fkey` FOREIGN KEY (`creatorUserId`) REFERENCES `Usuarios`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsuariosDependencias` ADD CONSTRAINT `UsuariosDependencias_dependenciaId_fkey` FOREIGN KEY (`dependenciaId`) REFERENCES `Dependencias`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsuariosDependencias` ADD CONSTRAINT `UsuariosDependencias_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuarios`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UsuariosDependencias` ADD CONSTRAINT `UsuariosDependencias_creatorUserId_fkey` FOREIGN KEY (`creatorUserId`) REFERENCES `Usuarios`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TiposOrdenServicio` ADD CONSTRAINT `TiposOrdenServicio_creatorUserId_fkey` FOREIGN KEY (`creatorUserId`) REFERENCES `Usuarios`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrdenesServicio` ADD CONSTRAINT `OrdenesServicio_tipoOrdenServicioId_fkey` FOREIGN KEY (`tipoOrdenServicioId`) REFERENCES `TiposOrdenServicio`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrdenesServicio` ADD CONSTRAINT `OrdenesServicio_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuarios`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrdenesServicio` ADD CONSTRAINT `OrdenesServicio_creatorUserId_fkey` FOREIGN KEY (`creatorUserId`) REFERENCES `Usuarios`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrdenesServicio` ADD CONSTRAINT `OrdenesServicio_dependenciaId_fkey` FOREIGN KEY (`dependenciaId`) REFERENCES `Dependencias`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrdenesServicioToTecnicos` ADD CONSTRAINT `OrdenesServicioToTecnicos_creatorUserId_fkey` FOREIGN KEY (`creatorUserId`) REFERENCES `Usuarios`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrdenesServicioToTecnicos` ADD CONSTRAINT `OrdenesServicioToTecnicos_tecnicoId_fkey` FOREIGN KEY (`tecnicoId`) REFERENCES `Usuarios`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrdenesServicioToTecnicos` ADD CONSTRAINT `OrdenesServicioToTecnicos_ordenServicioId_fkey` FOREIGN KEY (`ordenServicioId`) REFERENCES `OrdenesServicio`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrdenesServicioHistorial` ADD CONSTRAINT `OrdenesServicioHistorial_ordenServicioId_fkey` FOREIGN KEY (`ordenServicioId`) REFERENCES `OrdenesServicio`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrdenesServicioHistorial` ADD CONSTRAINT `OrdenesServicioHistorial_creatorUserId_fkey` FOREIGN KEY (`creatorUserId`) REFERENCES `Usuarios`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrdenesServicioHistorialToTecnicos` ADD CONSTRAINT `OrdenesServicioHistorialToTecnicos_ordenServicioHistorialId_fkey` FOREIGN KEY (`ordenServicioHistorialId`) REFERENCES `OrdenesServicioHistorial`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrdenesServicioHistorialToTecnicos` ADD CONSTRAINT `OrdenesServicioHistorialToTecnicos_tecnicoId_fkey` FOREIGN KEY (`tecnicoId`) REFERENCES `Usuarios`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrdenesServicioHistorialToTecnicos` ADD CONSTRAINT `OrdenesServicioHistorialToTecnicos_creatorUserId_fkey` FOREIGN KEY (`creatorUserId`) REFERENCES `Usuarios`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
