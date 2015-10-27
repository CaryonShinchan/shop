package com.shinchan.shop.utils;

import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.Security;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.KeyGenerator;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;

import org.springframework.stereotype.Service;

@Service
public class EncrypAES {

	public static void main(String[] args) throws Exception {
		 EncrypAES de1 = new EncrypAES();
		// String msg = "123";
		// String msg2 = "123";

		// byte[] encontent = de1.Encrytor(msg);
		// StringBuilder sb = new StringBuilder();
		// for (int i = 0; i < encontent.length; i++) {
		// sb.append(encontent[i]).append(",");
		// }
		// sb.deleteCharAt(sb.length()-1);
		//
		// String input = sb.toString();
		// String[] inputs = input.split(",");
		// byte[] outputs = new byte[inputs.length];
		// for (int i = 0; i < outputs.length; i++) {
		// outputs[i] = Byte.parseByte(inputs[i]);
		// }
		 
		 byte[] m = {79,11,-57,110,-117,-53,-72,56,-120,99,-10,-109,-8,-85,-25,127};
		 byte[] decontent = de1.decryptor(m);
		 System.out.println("解密后:" + new String(decontent));

		
//		EncrypAES de1 = new EncrypAES();
//		String msg = "public";
//		String msg2 = "public";
//
//		byte[] encontent = de1.encrytor(msg);
//		StringBuilder sb = new StringBuilder();
//		for (int i = 0; i < encontent.length; i++) {
//			sb.append(encontent[i]).append(",");
//		}
//		sb.deleteCharAt(sb.length() - 1);
//
//		byte[] encontent2 = de1.encrytor(msg2);
//		StringBuilder sb2 = new StringBuilder();
//		for (int i = 0; i < encontent2.length; i++) {
//			sb2.append(encontent2[i]).append(",");
//		}
//		sb2.deleteCharAt(sb2.length() - 1);
//		System.out.println(sb);
//		System.out.println(sb2);
//		System.out.println(sb.toString().equals(sb2.toString()));

	}

	// KeyGenerator 提供对称密钥生成器的功能，支持各种算法
	private KeyGenerator keygen;
	// SecretKey 负责保存对称密钥
	private SecretKey deskey;
	// Cipher负责完成加密或解密工作
	private Cipher c;
	// 该字节数组负责保存加密的结果
	private byte[] cipherByte;

	public EncrypAES() throws NoSuchAlgorithmException, NoSuchPaddingException {
		Security.addProvider(new com.sun.crypto.provider.SunJCE());
		// 实例化支持DES算法的密钥生成器(算法名称命名需按规定，否则抛出异常)
		keygen = KeyGenerator.getInstance("AES");
		// 生成密钥
		deskey = keygen.generateKey();
		// 生成Cipher对象,指定其支持的AES算法 ECB , No Padding, 对于输入数据长度不为16的整数倍时，应填充为整数倍
		c = Cipher.getInstance("AES");
		// c = Cipher.getInstance("AES/ECB/NoPadding");
	}

	/** 
	 * 对字符串加密 
	 * @param str 
	 * @return 
	 * @throws InvalidKeyException 
	 * @throws IllegalBlockSizeException 
	 * @throws BadPaddingException 
	 */
	public byte[] encrytor(String str) throws InvalidKeyException, IllegalBlockSizeException, BadPaddingException {
		// 根据密钥，对Cipher对象进行初始化，ENCRYPT_MODE表示加密模式
		c.init(Cipher.ENCRYPT_MODE, deskey);
		byte[] src = str.getBytes();
		// 加密，结果保存进cipherByte
		cipherByte = c.doFinal(src);
		return cipherByte;
	}

	/** 
	 * 对字符串解密 
	 * @param buff 
	 * @return 
	 * @throws InvalidKeyException 
	 * @throws IllegalBlockSizeException 
	 * @throws BadPaddingException 
	 */
	public byte[] decryptor(byte[] buff) throws InvalidKeyException, IllegalBlockSizeException, BadPaddingException {
		// 根据密钥，对Cipher对象进行初始化，DECRYPT_MODE表示加密模式
		c.init(Cipher.DECRYPT_MODE, deskey);
		cipherByte = c.doFinal(buff);
		return cipherByte;
	}

	/**
	 * 验证输入的密码是否正确 
	* @param password    加密后的密码 
	* @param inputString    输入的字符串 
	* @return    验证结果，TRUE:正确 FALSE:错误
	 * @throws BadPaddingException 
	 * @throws IllegalBlockSizeException 
	 * @throws InvalidKeyException 
	 */
	public boolean validatePassword(String password, String inputString) throws InvalidKeyException, IllegalBlockSizeException, BadPaddingException {
		// 加密输入的字符
		byte[] encontent = encrytor(inputString);
		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < encontent.length; i++) {
			sb.append(encontent[i]).append(",");
		}
		sb.deleteCharAt(sb.length() - 1);
		
		System.out.println("数据库：" + password);
		System.out.println("输入：" + sb);
		System.out.println(password.equals(sb.toString()));
		if (password.equals(sb.toString())) {
			return true;
		} else {
			return false;
		}
	}

}