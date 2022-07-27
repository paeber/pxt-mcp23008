// Enum defines

enum MCP_Defaults {
    I2C_ADDRESS = 0x20,
    IODIR = 0x18,
    GPIO = 0x05,

}

enum Logic_LV {
    enable = 0,
    disable = 1
}

enum MCP_Regs {
    IODIR = 0x01,
    DEFVAL = 0x08,
    GPPU = 0x06,
    GPIO = 0x09
}

enum MCP_Pins {
    RAK_RST = 0x01,
    RAK_LED = 0x02,
    LOG_RST = 0x04,
    GP3 = 0x08,
    GP4 = 0x10,
    OC1 = 0x20,
    OC2 = 0x40,
    USR_LED = 0x80
}